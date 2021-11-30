import React, { useState } from "react";
import CarritoPrecio from "./CarritoPrecio/CarritoPrecio";
import CarritoUnidades from "./CarritoUnidades/CarritoUnidades";
import CartContainerHover from "./CartContainerHover/CartContainerHover";
import IconoCarrito from "./IconoCarrito/IconoCarrito";
import "./CarritoSeccion.css";

function CarritoSeccion() {
	const [onHover, setOnHover] = useState(false);

	return (
		<div
			className="carritoSeccion"
			onMouseEnter={() => setOnHover(true)}
			onMouseLeave={() => setOnHover(false)}
		>
			<CarritoPrecio />
			<IconoCarrito />
			<CarritoUnidades />
			{onHover ? <CartContainerHover /> : undefined}
		</div>
	);
}

export default CarritoSeccion;
