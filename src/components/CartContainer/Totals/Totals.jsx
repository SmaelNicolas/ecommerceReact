import { useContext } from "react";

import { CartContext } from "../../../context/CartContext";

import "./Totals.css";

function Totals() {
	//context para obtener el carrito
	const { totalPrice, quantityItems } = useContext(CartContext);

	return (
		<div className="ItemOnCartContainerInfoTotals">
			<div className="ItemOnCartContainerInfoCantidad">
				PRODUCTS : {quantityItems()}
			</div>
			<div className="ItemOnCartContainerInfoPrecio">
				TOTAL : US$ {totalPrice()}
			</div>
		</div>
	);
}

export default Totals;
