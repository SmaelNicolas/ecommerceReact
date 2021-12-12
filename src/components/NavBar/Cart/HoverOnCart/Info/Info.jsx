import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../../../context/CartContext";

import "./Info.css";

function Info() {
	const [cart] = useContext(CartContext);
	const [quantity, setQuantity] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		function setTotals() {
			let cantidadAux = 0;
			let precioTotalAux = 0;

			cart.forEach((producto) => {
				cantidadAux += producto.cantidad;
				precioTotalAux +=
					parseFloat(producto.price) * producto.cantidad;
			});
			precioTotalAux = precioTotalAux.toFixed(2);
			setQuantity(cantidadAux);
			setTotalPrice(precioTotalAux);
		}
		setTotals();
	}, [cart]);

	return (
		<div className="cartContainerInfo">
			<div className="cartContainerInfoTotalProducts">
				Products :
				<span className="cartContainerInfoTotalProductsNumber">
					{quantity}
				</span>
			</div>
			<div className="cartContainerInfoTotalPrice">
				Total US$ :
				<span className="cartContainerInfoTotalPriceNumber">
					{totalPrice}
				</span>
			</div>
		</div>
	);
}

export default Info;
