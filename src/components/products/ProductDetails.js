import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoArrowUndoOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Featured from "../home/Featured";

export default function ProductDetails() {
	const [cart, setCart] = useContext(CartContext);
	const [product, setProduct] = useState([]);
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
					setProduct(response.data);
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

	const addToCart = (product) => {
		setCart([...cart, product]);
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(product));
	}, [product]);

	if (loading) return <div>Loading..</div>;
	if (error) return <div>An error happened</div>;

	return (
		<>
			<div key={product.id} className='flex flex-col m-20'>
				<div className='flex flex-row'>
					<div className='w-1/2 mr-20'>
						<img src={product.image_url} alt={product.title} />
					</div>
					<div className='flex flex-col w-1/2'>
						<h1 className='text-6xl pb-10'>{product.title}</h1>
						<div className='flex flex-row items-center justify-between mb-10'>
							<p className='text-2xl'>{product.price} NOK</p>
							<button
								onClick={addToCart}
								className='bg-success text-4xl px-4 py-3'>
								Add To Cart
							</button>
						</div>
						<p className='leading-loose'>{product.description}</p>
						<button onClick={goBack} className='self-start px-3 border mt-10'>
							<IoArrowUndoOutline className='inline mb-1' /> Back
						</button>
					</div>
				</div>

				<div>
					<h2 className='uppercase'>
						R<span className='underline'>eview</span>s
					</h2>
				</div>
			</div>
			<Featured />
		</>
	);
}
