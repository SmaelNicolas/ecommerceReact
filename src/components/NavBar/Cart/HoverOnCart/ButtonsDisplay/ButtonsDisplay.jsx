import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../../../../context/CartContext";
import "./ButtonsDisplay.css";

function ButtonsDisplay() {
	const [, , , , emptyCart] = useContext(CartContext);

	return (
		<>
			<div className="cartContainerBuy">
				<button className="cartContainerBuyButton">
					<Link to={`/cart`} className="cartContainerBuyButtonText">
						BUY
					</Link>
				</button>
				<button className="cartContainerBuyButton" onClick={emptyCart}>
					<Link to={`/`} className="cartContainerBuyButtonText">
						EMPTY CART
					</Link>
				</button>
			</div>
		</>
	);
}

export default ButtonsDisplay;
