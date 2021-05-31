import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route>
					<Homepage />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
