import { CarritoContext } from "../../../context/CarritoContext";

import "./Purchase.css";

function Purchase() {
	const { carrito } = CarritoContext;
	console.log(carrito);

	function generarOrden(e) {
		e.preventDefault();

		const comprador = {
			name: "Nico",
			phone: "2914238343",
			email: "nico.smael",
		};
		let totalPrice;

		carrito.map((prod) => (totalPrice += prod.price * prod.cantidad));

		console.log(comprador, carrito, totalPrice);
	}

	return (
		<div className="ItemOnCartContainerFinalizarCompra">
			<p>Purchase</p>

			<form action="submit">
				<button onClick={generarOrden}>Generate Order</button>
			</form>
		</div>
	);
}

export default Purchase;
