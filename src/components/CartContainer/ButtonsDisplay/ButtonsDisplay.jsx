import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import "./ButtonsDisplay.css";

function ButtonsDisplay() {
	const { cart, setCart } = useContext(CartContext);

	function isEmpty() {
		return cart.length === 0;
	}

	function vaciar() {
		setCart([]);
	}

	return isEmpty() ? (
		<>
			<Link to="/" className="ItemOnCartContainerListVaciar">
				HOME
			</Link>
			<div className="ItemOnCartContainerListVaciarMensaje">
				NO PRODUCTS TO DISPLAY
			</div>
		</>
	) : (
		<button className="ItemOnCartContainerListVaciar" onClick={vaciar}>
			EMPTY
		</button>
	);
}

export default ButtonsDisplay;
