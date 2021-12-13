import { useState, useEffect } from "react";

import ItemOnCart from "./ItemOnCart/ItemOnCart";
import Purchase from "./Purchase/Purchase";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Totals from "./Totals/Totals";
import ButtonsDisplay from "./ButtonsDisplay/ButtonsDisplay";

import "./CartContainer.css";

//crea la lista de productos dentro del carrito

function CartContainer() {
	//loading effect
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1500);
	}, [loader]);

	return loader ? (
		<LoadingScreen />
	) : (
		<>
			<section className="ItemOnCartContainer">
				<div className="ItemOnCartContainerInfo">
					<Totals />
					<ButtonsDisplay />
					<ItemOnCart />
				</div>
				<Purchase />
			</section>
		</>
	);
}

export default CartContainer;
