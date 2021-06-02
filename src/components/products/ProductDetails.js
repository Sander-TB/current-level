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
			<button onClick={goBack} className='self-start px-3 border mt-10'>
				<IoArrowUndoOutline className='inline mb-1' /> Go Back
			</button>
			<div key={product.id} className='flex flex-col m-20'>
				<div className='flex flex-row'>
					<div className='w-1/2 mr-20'>
						<img src={product.image_url} alt={product.title} />
					</div>
					<div className='flex flex-col w-1/2'>
						<h1 className='text-5xl tracking-widest uppercase pb-10'>
							{product.title}
						</h1>
						<h3 className='text-xl mb-5'>{product.brand}</h3>
						<div className='flex flex-row'>
							<div className='flex'>
								<FaStar className='inline mr-1' />
								<FaStar className='inline mr-1' />
								<FaStar className='inline mr-1' />
								<p className='text-gray underline'> 3 Reviews</p>
							</div>
							<div className='flex flex-col border border-gray-lighter ml-10'>
								<div className='text-center py-3'>
									<p className='text-md text-gray'> KR {product.price} NOK</p>
								</div>
								<div className='flex flex-row'>
									<div className='flex flex-col text-center border-t border-gray-lighter'>
										<input
											className='border border-white w-1/4 self-center mt-2'
											type='number'
											id='quantity'
											name='quantity'
											min='1'
										/>
										<label> Qty:</label>
									</div>
									<button
										onClick={addToCart}
										className='bg-black uppercase text-white font-light hover:bg-success hover:text-black transition ease-in-out duration-500 text-2xl px-10 py-1'>
										Add To Cart
									</button>
								</div>
							</div>
						</div>
						<p className='uppercase text-md mt-10 mb-5'>Description</p>
						<p className='leading-loose'>{product.description}</p>
					</div>
				</div>

				<div className='flex flex-col'>
					<h2 className='uppercase text-3xl mb-2'>
						R<span className='underline'>eview</span>s
					</h2>
					<div className='flex'>
						<FaStar className='inline mr-1' />
						<FaStar className='inline mr-1' />
						<FaStar className='inline' />
						<p className='pl-2 mb-5 text-gray-lighter underline'> 3 Reviews</p>
					</div>
					<div className='flex flex-row'>
						<div className='flex flex-col border-r border-gray'>
							<div className='flex'>
								<p className='uppercase mr-5'>Name Nameson</p>
								<FaStar className='inline mr-1' />
								<FaStar className='inline mr-1' />
								<FaStar className='inline mr-1' />
								<FaStar className='inline mr-1' />
								<FaStar className='inline' />
							</div>
							<p className='uppercase text-gray-lighter text-sm mb-5'>
								Verified Buyer
							</p>
							<p className=''>Awsome Product</p>
							<p className='text-gray'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Featured />
		</>
	);
}
