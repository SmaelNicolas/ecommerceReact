import { useContext } from "react";
import { useState, useEffect } from "react";

import { CartContext } from "../../../context/CartContext";

import "./Totals.css";

function Totals() {
	//context para obtener el carrito
	const [cart] = useContext(CartContext);

	//hook para saber el total de productos y actualizarlos
	const [totalProductos, setTotalProductos] = useState(0);

	//hook para saber el total del precio y actualizarlos
	const [totalPrecio, setTotalPrecio] = useState(0);

	useEffect(() => {
		let totalAuxiliar = 0;
		let precioAuxiliar = 0;
		cart.forEach((producto) => {
			precioAuxiliar += parseFloat(producto.price) * producto.cantidad;
			totalAuxiliar += producto.cantidad;
		});
		precioAuxiliar = precioAuxiliar.toFixed(2);
		setTotalProductos(totalAuxiliar);
		setTotalPrecio(precioAuxiliar);
	}, [cart]);

	return (
		<div className="ItemOnCartContainerInfoTotals">
			<div className="ItemOnCartContainerInfoCantidad">
				PRODUCTS : {totalProductos}
			</div>
			<div className="ItemOnCartContainerInfoPrecio">
				TOTAL : US$ {totalPrecio}
			</div>
		</div>
	);
}

export default Totals;
