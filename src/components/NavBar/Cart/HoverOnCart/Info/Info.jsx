import { useContext } from "react";
import { CartContext } from "../../../../../context/CartContext";

import "./Info.css";

function Info() {
	const [, , totalPrice, quantityItems] = useContext(CartContext);

	return (
		<div className="cartContainerInfo">
			<div className="cartContainerInfoTotalProducts">
				Products :
				<span className="cartContainerInfoTotalProductsNumber">
					{quantityItems()}
				</span>
			</div>
			<div className="cartContainerInfoTotalPrice">
				Total US$ :
				<span className="cartContainerInfoTotalPriceNumber">
					{totalPrice()}
				</span>
			</div>
		</div>
	);
}

export default Info;
