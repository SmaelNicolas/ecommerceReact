import NavBar from "./components/NavBar/NavBar";
import NavBarResponsive from "./components/NavBarResponsive/NavBarResponsive";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDescriptionContainer from "./components/ItemDescriptionContainer/ItemDescriptionContainer";
import ItemOnCartContainer from "./components/ItemOnCartContainer/ItemOnCartContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import { AddedToCartProvider } from "./context/AddedToCartContext";

function App() {
	return (
		<CarritoProvider>
			<AddedToCartProvider>
				<BrowserRouter>
					<div className="App">
						<NavBar />
						<NavBarResponsive />
						<Routes>
							<Route
								exact
								path="/"
								element={<ItemListContainer />}
							/>
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

							<Route
								exact
								path="/cart"
								element={<ItemOnCartContainer />}
							/>
						</Routes>
					</div>
				</BrowserRouter>
			</AddedToCartProvider>
		</CarritoProvider>
	);
}

export default App;
