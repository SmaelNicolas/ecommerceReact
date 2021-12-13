import NavBar from "./components/NavBar/NavBar";
import NavBarResponsive from "./components/NavBarResponsive/NavBarResponsive";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDescriptionContainer from "./components/ItemDescriptionContainer/ItemDescriptionContainer";
import CartContainer from "./components/CartContainer/CartContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductAddedProvider } from "./context/ProductAddedContext";

function App() {
	return (
		<CartProvider>
			<ProductAddedProvider>
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
								path="/products/:idCategory"
								element={<ItemListContainer />}
							/>
							<Route
								exact
								path="/description/:idProduct"
								element={<ItemDescriptionContainer />}
							/>

							<Route
								exact
								path="/cart"
								element={<CartContainer />}
							/>
						</Routes>
					</div>
				</BrowserRouter>
			</ProductAddedProvider>
		</CartProvider>
	);
}

export default App;
