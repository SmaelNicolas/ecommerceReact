import NavBar from "./components/NavBar/NavBar";
import NavBarResponsive from "./components/NavBarResponsive/NavBarResponsive";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDescriptionContainer from "./components/ItemDescriptionContainer/ItemDescriptionContainer";
import CartContainer from "./components/CartContainer/CartContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductAddedProvider } from "./context/ProductAddedContext";
import { OrderGeneratedProvider } from "./context/OrderGeneratedContext";
import OrdersContainer from "./components/OrdersContainer/OrdersContainer";
import OrdersInfo from "./components/OrdersContainer/OrdersInfo/OrdersInfo";

function App() {
	return (
		<CartProvider>
			<ProductAddedProvider>
				<OrderGeneratedProvider>
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
								<Route
									exact
									path="/orders"
									element={<OrdersContainer />}
								/>
								<Route
									exact
									path="/orders/:idOrder"
									element={<OrdersInfo />}
								/>
							</Routes>
						</div>
					</BrowserRouter>
				</OrderGeneratedProvider>
			</ProductAddedProvider>
		</CartProvider>
	);
}

export default App;
