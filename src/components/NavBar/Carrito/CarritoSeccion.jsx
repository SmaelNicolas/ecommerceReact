import { useState } from "react";

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
	const [carrito] = useContext(CarritoContext);
	const [addedToCart] = useContext(AddedToCartContext);
	const [addedToCartDisplay] = useContext(DisplayAddToCartContext);
	let totalPrice = addedToCart.price * addedToCart.cantidad;

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

	function displayAdded() {
		console.log(addedToCartDisplay);
		return (
			<>
				{addedToCartDisplay ? (
					<AddedToCartContainer
						title={addedToCart.title}
						cant={addedToCart.cantidad}
						price={totalPrice}
					/>
				) : undefined}
			</>
		);
	}

	return (
		<Link
			to={"/cart"}
			className="carritoSeccion"
			onMouseEnter={() => mostrarNoVacio()}
			onMouseLeave={() => ocultar()}
		>
			<CarritoPrecio price={precioTotal()} />
			<IconoCarrito />
			<CarritoUnidades cant={cantidadProductos()} />
			{onHover ? <CartContainerHover /> : null}

			{displayAdded()}
		</Link>
	);
}

export default CarritoSeccion;
