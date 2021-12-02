import { useContext } from "react";

import { CarritoContext } from "../../../../../context/CarritoContext";
import "./CartListHover.css";

function CartListHover({ producto }) {
	const [carrito, setCarrito] = useContext(CarritoContext);

	function deleteItem() {
		let aux = carrito;
		aux = aux.filter((prod) => prod.id !== producto.id);
		setCarrito(aux);
	}

	return (
		<>
			<p className="cartListHoverTitle"> {producto.title} </p>
			<p className="cartListHoverPrice">
				{" "}
				US$ {(producto.price * producto.cantidad).toFixed(2)}
			</p>
			<p className="cartListHoverCantidad">
				Cantidad: {producto.cantidad}
			</p>
			<i className="fas fa-trash" onClick={deleteItem}></i>
		</>
	);
}

export default CartListHover;
