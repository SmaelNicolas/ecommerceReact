import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../../../../context/CartContext";
import "./ButtonsDisplay.css";

function ButtonsDisplay() {
	// eslint-disable-next-line
	const [cart, setCart] = useContext(CartContext);

	function empty() {
		setCart([]);
	}

	return (
		<>
			<div className="cartContainerBuy">
				<button className="cartContainerBuyButton">
					<Link to={`/cart`} className="cartContainerBuyButtonText">
						BUY
					</Link>
				</button>
				<button className="cartContainerBuyButton" onClick={empty}>
					<Link to={`/`} className="cartContainerBuyButtonText">
						EMPTY
					</Link>
				</button>
			</div>
		</>
	);
}

export default ButtonsDisplay;
