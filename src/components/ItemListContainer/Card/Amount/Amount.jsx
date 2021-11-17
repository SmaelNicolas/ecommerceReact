import { useState } from "react";
import "./Amount.css";

function Amount({ title, stock, price }) {
	let [cantidad, setCantidad] = useState(0);

	function sumar() {
		if (cantidad >= 0 && cantidad < stock) {
			setCantidad(cantidad + 1);
		}
	}

	function restar() {
		if (cantidad > 0 && cantidad <= stock) {
			setCantidad(cantidad - 1);
		}
	}

	return (
		<div className="productCardAmount">
			<i
				className="fas fa-arrow-down productCardAmountArrow"
				onClick={restar}
			/>
			<input
				className="productCardAmountInput"
				type="text"
				value={cantidad}
			/>
			<i
				className="fas fa-arrow-up productCardAmountArrow"
				onClick={sumar}
			/>
			<i
				className="fas fa-cart-plus productCardAmountBuy"
				onClick={console.log("AGREGAR AL CARRITO")}
			/>
		</div>
	);
}

export default Amount;
