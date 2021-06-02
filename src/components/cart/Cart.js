import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const cartFromLS = JSON.parse(localStorage.getItem("cart"));

export default function Cart(props) {
	const [cart, setCart] = useContext(CartContext);

	console.log(cartFromLS);

	const clearCart = () => {
		setCart([]);
		localStorage.removeItem("cart");
	};

	if (cartFromLS) {
		return (
			<div>
				<h1>Cart</h1>
				<p>Items in Cart: {cart.length}</p>
				<button onClick={clearCart} className='border'>
					Clear Cart
				</button>
			</div>
		);
	} else {
		return <div>Your Cart Is Empty </div>;
	}
}
