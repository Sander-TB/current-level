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
				<button onClick={goBack} className='self-start px-3 border mb-10'>
					<IoArrowUndoOutline className='inline mb-1' /> Go Back
				</button>
				<div className='flex flex-row'>
					<div className='w-2/3 mr-20'>
						<img src={product.image_url} alt={product.title} />
					</div>
					<div className='flex flex-col w-1/3'>
						<h1 className='text-5xl tracking-widest uppercase pb-10'>
							{product.title}
						</h1>
						<h3 className='text-2xl mb-5 tracking-wider'>{product.brand}</h3>
						<div className='flex flex-row mt-2 justify-between'>
							<div className='flex flex-col'>
								<div className='flex'>
									<FaStar fill='#fedc45' className='inline mr-1 text-xl' />
									<FaStar fill='#fedc45' className='inline mr-1 text-xl' />
									<FaStar fill='#fedc45' className='inline mr-1 text-xl' />
									<FaStar fill='#fedc45' className='inline mr-1 text-xl' />
									<FaStar fill='#fedc45' className='inline mr-1 text-xl' />
								</div>
								<p className='text-gray underline mt-2'> 3 Reviews</p>
							</div>
							<div className='flex flex-col border border-gray-lighter '>
								<div className='text-center py-3'>
									<p className='text-md text-gray'> KR {product.price} NOK</p>
								</div>
								<div className='flex flex-row'>
									<button
										onClick={addToCart}
										className='bg-black uppercase text-white font-light hover:bg-success hover:text-black transition ease-in-out duration-500 text-2xl py-3 px-10'>
										Add To Cart
									</button>
								</div>
							</div>
						</div>
						<p className='text-gray uppercase text-md mt-10 mb-5'>
							Description
						</p>
						<p className='text-gray leading-loose'>{product.description}</p>
					</div>
				</div>

				<div className='flex flex-col mt-20'>
					<h2 className='uppercase text-3xl mb-2'>
						R<span className='underline'>eview</span>s
					</h2>
					<div className='flex'>
						<FaStar fill='#fedc45' className='inline mr-1 text-xl' />
						<FaStar fill='#fedc45' className='inline mr-1 text-xl' />
						<FaStar fill='#fedc45' className='inline mr-1 text-xl' />
						<FaStar fill='#fedc45' className='inline mr-1 text-xl' />
						<FaStar fill='#fedc45' className='inline text-xl' />
						<p className='pl-2 text-gray-lighter underline'> 3 Reviews</p>
					</div>
					<div className='flex flex-row'>
						<div className='flex flex-col border-r border-gray pt-5'>
							<div className='flex'>
								<p className='uppercase mr-5 text-2xl'>Name Nameson</p>
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline text-2xl' />
							</div>
							<p className='uppercase text-gray-lighter text-sm pb-5'>
								Verified Buyer
							</p>
							<p className='text-xl'>Awsome Product</p>
							<p className='text-gray pr-4'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
						<div className='flex flex-col pl-5 border-r border-gray pt-5'>
							<div className='flex'>
								<p className='uppercase mr-5 text-2xl'>Nils Smith</p>
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline text-2xl' />
							</div>
							<p className='uppercase text-gray-lighter text-sm pb-5'>
								Verified Buyer
							</p>
							<p className='text-xl capitalize'>Cool Product</p>
							<p className='text-gray pr-4'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
						<div className='pl-5 flex flex-col pt-5'>
							<div className='flex'>
								<p className='uppercase mr-5 text-2xl'>John Doe</p>
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline mr-1 text-2xl' />
								<FaStar className='inline text-2xl' />
							</div>
							<p className='uppercase text-gray-lighter text-sm pb-5'>
								Verified Buyer
							</p>
							<p className='text-xl capitalize'>Could be better</p>
							<p className='text-gray pr-4'>
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
