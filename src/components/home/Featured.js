import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Featured() {
	const [featured, setFeatured] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "http://localhost:1337/products";

	function handleClick() {
		window.location.reload(false);
	}

	useEffect(
		() => {
			async function getFeatured() {
				try {
					const response = await axios.get(url);
					setFeatured(response.data);
				} catch (e) {
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getFeatured();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	if (loading) return <div>Loading..</div>;
	if (error) return <div>An error happened</div>;

	return (
		<section className='mt-20'>
			<h2 className='uppercase text-center text-gray-darker font-thin text-3xl mb-16'>
				F<span className='underline'>eatured Product</span>s
			</h2>
			<div className='flex flex-row'>
				{featured.map((product) => {
					if (product.featured === true) {
						return (
							<div key={product.id} className='w-1/3'>
								<img src={product.image_url} alt={product.title} />
								<div className='text-center relative -top-1/2'>
									<h2 className='text-4xl text-black'>{product.title}</h2>
									<Link
										to={`/product/${product.id}`}
										onClick={handleClick}
										className='font-thin text-xl px-3 py-2 uppercase shadow-lg bg-white hover:bg-success transition ease-in-out duration-500'>
										Shop Now
									</Link>
								</div>
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
