import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import NavBarResponsive from "./components/NavBarResponsive/NavBarResponsive";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { getFetch } from "./functions/getFetch";

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
			<header className="header">
				<NavBar />
				<NavBarResponsive />
			</header>
			{loader ? (
				<div className="loaderContainer">
					<div className="loader"></div>
				</div>
			) : (
				<ItemListContainer producto={producto} />
			)}
		</div>
	);
}

export default App;
