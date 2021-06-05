import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "http://localhost:1337/products";

	useEffect(
		() => {
			async function getProducts() {
				try {
					const response = await axios.get(url);
					setProducts(response.data);
				} catch (e) {
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getProducts();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const onSuggestHandler = (search) => {
		setSearch(search);
		setSuggestions([]);
	};

	const onChangeHandler = (search) => {
		let matches = [];
		if (search.length > 0) {
			matches = products.filter((product) => {
				const regex = new RegExp(`${search}`, "gi");
				return product.title.match(regex);
			});
		}
		setSuggestions(matches);
		setSearch(search);
	};

	if (loading) return <div>Loading..</div>;
	if (error) return <div>An error happened</div>;

	return (
		<section className='my-20 mx-20 flex flex-col'>
			<h2 className='uppercase text-center text-gray-darker font-thin text-4xl mb-16'>
				Our Products
			</h2>
			<div className='text-center w-full mb-10'>
				<input
					placeholder='Search'
					className='font-thin border border-gray py-2 px-5 w-1/2 bg-white text-lg'
					onChange={(e) => onChangeHandler(e.target.value)}
					value={search}
				/>
				<div className='mt-3 absolute -left-1  items-center w-full flex flex-col text-xl cursor-pointer'>
					{suggestions &&
						suggestions.map((suggestion, i) => (
							<div
								key={i}
								onClick={() => onSuggestHandler(suggestion.title)}
								className='relative py-3 bg-white-lighter text-left font-light border border-t-0 border-gray w-2/5 self-center'>
								{suggestion.title}
							</div>
						))}
				</div>
			</div>
			<div className='grid grid-cols-3 gap-8'>
				{products.map((product) => {
					if (search === product.title || search.length < 6) {
						return (
							<div key={product.id} className='flex flex-col items-center'>
								<img src={product.image_url} alt={product.title} />
								<h3 className='text-4xl font-thin pt-4'>{product.title}</h3>
								<Link
									to={`/product/${product.id}`}
									className='text-2xl px-5 py-2 text-white-lighter bg-gray mt-5 mb-10 hover:bg-success transition ease-in-out duration-500'>
									View Details
								</Link>
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
		</section>
	);
}
