import { createContext, Component } from "react";
import { useState } from "react";
import ProductDetails from "../components/products/ProductDetails";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);
	return (
		<CartContext.Provider value={[cart, setCart]}>
			{props.children}
		</CartContext.Provider>
	);
};
