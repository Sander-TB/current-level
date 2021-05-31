import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { IoArrowUndoOutline } from "react-icons/io5";

export default function ProductDetails() {
	const [details, setDetails] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const history = useHistory();
	const { id } = useParams();
	const url = `http://localhost:1337/products/${id}`;

	function goBack() {
		history.push("/products");
	}

	useEffect(
		() => {
			async function getOneProduct() {
				try {
					const response = await axios.get(url);
					console.log(response.data);
					setDetails(response.data);
				} catch (e) {
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getOneProduct();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	if (loading) return <div>Loading..</div>;
	if (error) return <div>An error happened</div>;

	return (
		<div key={details.id} className='flex flex-row m-20'>
			<div className='w-1/2 mr-20'>
				<img src={details.image_url} alt={details.title} />
			</div>
			<div className='flex flex-col w-1/2'>
				<h1 className='text-6xl pb-10'>{details.title}</h1>
				<div className='flex flex-row items-center justify-between mb-10'>
					<p className='text-2xl'>{details.price} NOK</p>
					<button className='bg-success text-4xl px-4 py-3'>Add To Cart</button>
				</div>
				<p className='leading-loose'>{details.description}</p>
				<button onClick={goBack} className='self-start px-3 border mt-10'>
					<IoArrowUndoOutline className='inline mb-1' /> Back
				</button>
			</div>
		</div>
	);
}
