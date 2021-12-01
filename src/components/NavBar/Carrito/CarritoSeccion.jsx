import React, { useState } from "react";
import CarritoPrecio from "./CarritoPrecio/CarritoPrecio";
import CarritoUnidades from "./CarritoUnidades/CarritoUnidades";
import CartContainerHover from "./CartContainerHover/CartContainerHover";
import IconoCarrito from "./IconoCarrito/IconoCarrito";
import { useContext } from "react";

import { CarritoContext } from "../../../context/CarritoContext";
import "./CarritoSeccion.css";

function CarritoSeccion() {
	const [onHover, setOnHover] = useState(false);
	const [carrito] = useContext(CarritoContext);

	function mostrarNoVacio() {
		carrito.length === 0 ? setOnHover(false) : setOnHover(true);
	}
	function ocultar() {
		setOnHover(false);
	}

	function cantidadProductos() {
		let cantidadTotal = 0;

		carrito.map((producto) => (cantidadTotal += producto.cantidad));
		return cantidadTotal;
	}

	function precioTotal() {
		let precioTotal = 0;

		carrito.map(
			(producto) => (precioTotal += producto.price * producto.cantidad)
		);
		return precioTotal;
	}

	return (
		<div
			className="carritoSeccion"
			onMouseEnter={() => mostrarNoVacio()}
			onMouseLeave={() => ocultar()}
		>
			<CarritoPrecio price={precioTotal()} />
			<IconoCarrito />
			<CarritoUnidades cant={cantidadProductos()} />
			{onHover ? <CartContainerHover /> : null}
		</div>
	);
}

export default CarritoSeccion;
