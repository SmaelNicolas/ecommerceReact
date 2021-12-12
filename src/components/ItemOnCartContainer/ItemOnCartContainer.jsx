import { useContext } from "react";
import { useState, useEffect } from "react";

import { CartContext } from "../../context/CartContext";

import ItemOnCart from "./ItemOnCart/ItemOnCart";
import Purchase from "./Purchase/Purchase";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Totals from "./Totals/Totals";
import ButtonsDisplay from "./ButtonsDisplay/ButtonsDisplay";

import "./ItemOnCartContainer.css";

//crea la lista de productos dentro del carrito

function ItemOnCartContainer() {
	//context para obtener el carrito
	// eslint-disable-next-line
	const [cart] = useContext(CartContext);

	//loading effect
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1500);
	}, [loader]);

	function listToDisplay() {
		return (
			<>
				<section className="ItemOnCartContainer">
					<div className="ItemOnCartContainerInfo">
						<Totals />
						<ButtonsDisplay />
						<ItemOnCart />
					</div>
					<div className="ItemOnCartContainerFinalizarCompra">
						<Purchase />
					</div>
				</section>
			</>
		);
	}

	return loader ? <LoadingScreen /> : listToDisplay();
}

export default ItemOnCartContainer;
