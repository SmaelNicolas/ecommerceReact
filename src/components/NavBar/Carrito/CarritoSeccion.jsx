import { useState, useEffect } from "react";

import CarritoPrecio from "./CarritoPrecio/CarritoPrecio";
import CarritoUnidades from "./CarritoUnidades/CarritoUnidades";
import CartContainerHover from "./CartContainerHover/CartContainerHover";
import IconoCarrito from "./IconoCarrito/IconoCarrito";
import AddedToCartContainer from "./AddedToCartContainer/AddedToCartContainer";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CarritoContext } from "../../../context/CarritoContext";
import { AddedToCartContext } from "../../../context/AddedToCartContext";
import { DisplayAddToCartContext } from "../../../context/DisplayAddToCartContext";
import "./CarritoSeccion.css";

function CarritoSeccion() {
	const [onHover, setOnHover] = useState(false);
	const [totalProductos, setTotalProductos] = useState(0);
	const [totalPrecio, setTotalPrecio] = useState(0);
	const [carrito] = useContext(CarritoContext);
	const [addedToCart] = useContext(AddedToCartContext);
	const [addedToCartDisplay] = useContext(DisplayAddToCartContext);

	useEffect(() => {
		let totalAuxiliar = 0;
		let precioAuxiliar = 0;
		console.log(carrito);
		carrito.forEach((producto) => {
			precioAuxiliar += parseFloat(producto.price) * producto.cantidad;
			totalAuxiliar += producto.cantidad;
		});
		precioAuxiliar = precioAuxiliar.toFixed(2);
		setTotalProductos(totalAuxiliar);
		setTotalPrecio(precioAuxiliar);
	});

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
			<CarritoPrecio price={totalPrecio} />
			<IconoCarrito />
			<CarritoUnidades cant={totalProductos} />
			{onHover ? <CartContainerHover /> : null}

			{addedToCartDisplay ? (
				<AddedToCartContainer
					title={addedToCart.title}
					cant={addedToCart.cantidad}
					price={addedToCart.cantidad * addedToCart.price}
				/>
			) : undefined}
		</Link>
	);
}

export default CarritoSeccion;
