import { useState, useEffect } from "react";

import Price from "./Price/Price";
import Quantity from "./Quantity/Quantity";
import CartContainerHover from "./HoverOnCart/HoverOnCart";
import Icon from "./Icon/Icon";
import MesaggeAdded from "./MesaggeAdded/MesaggeAdded";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CarritoContext } from "../../../context/CarritoContext";
import { AddedToCartContext } from "../../../context/AddedToCartContext";
import "./Cart.css";

function Cart() {
	const [onHover, setOnHover] = useState(false);
	const [totalProductos, setTotalProductos] = useState(0);
	const [totalPrecio, setTotalPrecio] = useState(0);
	const [carrito] = useContext(CarritoContext);
	const [addedToCart] = useContext(AddedToCartContext);

	useEffect(() => {
		let totalAuxiliar = 0;
		let precioAuxiliar = 0;
		carrito.forEach((producto) => {
			precioAuxiliar += parseFloat(producto.price) * producto.cantidad;
			totalAuxiliar += producto.cantidad;
		});
		precioAuxiliar = precioAuxiliar.toFixed(2);
		setTotalProductos(totalAuxiliar);
		setTotalPrecio(precioAuxiliar);
	}, [carrito, addedToCart]);

	function noMostrarVacio() {
		carrito.length === 0 ? setOnHover(false) : setOnHover(true);
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

			{addedToCart.length !== 0 ? (
				<MesaggeAdded
					title={addedToCart.title}
					cant={addedToCart.cantidad}
					price={addedToCart.cantidad * addedToCart.price}
				/>
			) : undefined}
			{onHover ? <CartContainerHover /> : null}
		</Link>
	);
}

export default Cart;
