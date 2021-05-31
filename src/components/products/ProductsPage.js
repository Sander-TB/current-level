import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductsPage() {
	const [featured, setFeatured] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "http://localhost:1337/products";

	useEffect(
		() => {
			async function getProducts() {
				try {
					const response = await axios.get(url);
					setFeatured(response.data);
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

	if (loading) return <div>Loading..</div>;
	if (error) return <div>An error happened</div>;

	return (
		<section className='my-20 mx-20 flex flex-col'>
			<h2 className='uppercase text-center text-gray font-thin text-4xl mb-16'>
				Our Products
			</h2>
			<div className='text-center w-full mb-10'>
				<input
					placeholder='Search'
					className='font-thin border border-gray py-2 px-5 w-1/2 bg-white text-lg'
				/>
			</div>
			<div className='grid grid-cols-3 gap-8'>
				{featured.map((product) => {
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
				})}
			</div>
		</section>
	);
}
