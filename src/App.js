import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";
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
			</header>
			{loader ? (
				<div className="loaderContainer">
					<div className="loader"></div>
				</div>
			) : (
				<ItemListContainer />
			)}
		</div>
	);
}

export default App;
