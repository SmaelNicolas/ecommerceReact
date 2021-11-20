import NavBar from "./components/NavBar/NavBar";
import NavBarResponsive from "./components/NavBarResponsive/NavBarResponsive";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDescriptionContainer from "./components/ItemDescriptionContainer/ItemDescriptionContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<NavBarResponsive />
				<Routes>
					<Route exact path="/" element={<ItemListContainer />} />
					<Route
						exact
						path="/productos/:idCategoria"
						element={<ItemListContainer />}
					/>
					<Route
						exact
						path="/descripcion/:idProducto"
						element={<ItemDescriptionContainer />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
