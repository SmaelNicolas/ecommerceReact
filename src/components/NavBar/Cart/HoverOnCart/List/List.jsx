import { useContext } from "react";
import { Link } from "react-router-dom";

import { CarritoContext } from "../../../../../context/CarritoContext";
import "./List.css";

function List({ producto }) {
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
			<Link to={""}>
				<i className="fas fa-trash" onClick={deleteItem}></i>
			</Link>
		</>
	);
}

export default List;
