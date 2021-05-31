import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import ProductsPage from "./components/products/ProductsPage";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/cart/Cart";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<CartProvider>
			<Router>
				<Nav />
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
					<Route path='/products'>
						<ProductsPage />
					</Route>
					<Route path='/product/:id'>
						<ProductDetails />
					</Route>
					<Route path='/cart'>
						<Cart />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</CartProvider>
	);
}

export default App;
