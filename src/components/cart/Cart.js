import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FiXCircle } from "react-icons/fi";

const cartFromLS = JSON.parse(localStorage.getItem("cart"));

export default function Cart(props) {
	const [cart, setCart] = useContext(CartContext);

	const clearCart = () => {
		setCart([]);
		localStorage.removeItem("cart");
	};

	if (cartFromLS.length < 0) {
		return (
			<>
				<div className='flex flex-col items-center h-screen mx-20'>
					<h1 className='text-5xl my-10'>Your Cart</h1>
					<div className='flex w-full justify-between border-b border-gray'>
						<p className='uppercase text-gray'>products</p>
						<p className='uppercase text-gray'>Total</p>
					</div>
					<div className=''>
						<img src={cartFromLS.image_url} alt={cartFromLS.title} />
						<h2>{cartFromLS.title}</h2>
					</div>
					<div className='flex flex-row'></div>
					<button onClick={clearCart} className='border px-3 py-1'>
						Clear Cart <FiXCircle className='inline mb-1' />
					</button>
				</div>
			</>
		);
	} else {
		return <div>Your Cart Is Empty </div>;
	}
}
