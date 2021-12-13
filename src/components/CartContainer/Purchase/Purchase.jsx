// import { CartContext } from "../../../context/CartContext";

import "./Purchase.css";

function Purchase() {
	// const { cart } = CartContext;
	// console.log(cart);
	// function generarOrden(e) {
	// 	e.preventDefault();
	// 	const comprador = {
	// 		name: "Nico",
	// 		phone: "2914238343",
	// 		email: "nico.smael",
	// 	};
	// 	let totalPrice;
	// 	cart.map((prod) => (totalPrice += prod.price * prod.cantidad));
	// 	console.log(comprador, cart, totalPrice);
	// }
	return (
		<div className="ItemOnCartContainerFinalizarCompra">
			<p>Purchase</p>
			<form action="submit">
				{/* <button onClick={generarOrden}>Generate Order</button> */}
			</form>
		</div>
	);
}

export default Purchase;
