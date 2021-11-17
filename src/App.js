import { useState, useEffect } from "react";
import { getFetch } from "./functions/getFetch";
import NavBar from "./components/NavBar/NavBar";
import NavBarResponsive from "./components/NavBarResponsive/NavBarResponsive";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
	const [producto, setProducts] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		getFetch
			.then((productos) => {
				setProducts(productos);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoader(false));
	}, []);

	return (
		<div className="App">
			<NavBar />
			<NavBarResponsive />
			{loader ? (
				<LoadingScreen />
			) : (
				<ItemListContainer producto={producto} />
			)}
		</div>
	);
}

export default App;
