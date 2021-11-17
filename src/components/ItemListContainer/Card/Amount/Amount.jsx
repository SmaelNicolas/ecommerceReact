import { useState } from "react";
import "./Amount.css";

function Amount({ title, stock, price, init }) {
	let [cantidad, setCantidad] = useState(init);

	function sumar() {
		cantidad >= 0 && cantidad < stock
			? setCantidad(cantidad + 1)
			: console.log("No hay mas Stock");
	}

	function restar() {
		cantidad > 0 && cantidad <= stock
			? setCantidad(cantidad - 1)
			: console.log("No hay mas Stock");
	}

	function actualizar() {
		setCantidad(cantidad);
	}

	function agregarAlCarrito() {
		cantidad === 0
			? console.log("Primero selecciona la cantidad")
			: console.log(cantidad + "x AGREGADO AL CARRITO");
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
				onChange={actualizar}
			/>
			<i
				className="fas fa-arrow-up productCardAmountArrow"
				onClick={sumar}
			/>
			<i
				className="fas fa-cart-plus productCardAmountBuy"
				onClick={agregarAlCarrito}
			/>
		</div>
	);
}

export default Amount;
