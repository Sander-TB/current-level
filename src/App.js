import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import ProductsPage from "./components/products/ProductsPage";
import ProductDetails from "./components/products/ProductDetails";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";

function App() {
	return (
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
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
