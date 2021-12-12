import { useState, useEffect } from "react";

import Price from "./Price/Price";
import Quantity from "./Quantity/Quantity";
import CartContainerHover from "./HoverOnCart/HoverOnCart";
import Icon from "./Icon/Icon";
import MesaggeAdded from "./MesaggeAdded/MesaggeAdded";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../../context/CartContext";
import { ProductAddedContext } from "../../../context/ProductAddedContext";
import "./Cart.css";

function Cart() {
	const [onHover, setOnHover] = useState(false);
	const [totalProductos, setTotalProductos] = useState(0);
	const [totalPrecio, setTotalPrecio] = useState(0);
	const [cart] = useContext(CartContext);
	const [productAdded] = useContext(ProductAddedContext);

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
	}, [cart, productAdded]);

	function noMostrarVacio() {
		cart.length === 0 ? setOnHover(false) : setOnHover(true);
	}
	function ocultar() {
		setOnHover(false);
	}

	return (
		<Link
			to={"/cart"}
			className="carritoSeccion"
			onMouseEnter={() => noMostrarVacio()}
			onMouseLeave={() => ocultar()}
		>
			<Price price={totalPrecio} />
			<Icon />
			<Quantity cant={totalProductos} />

			{productAdded.length !== 0 ? (
				<MesaggeAdded
					title={productAdded.title}
					cant={productAdded.cantidad}
					price={productAdded.cantidad * productAdded.price}
				/>
			) : undefined}
			{onHover ? <CartContainerHover /> : null}
		</Link>
	);
}

export default Cart;
