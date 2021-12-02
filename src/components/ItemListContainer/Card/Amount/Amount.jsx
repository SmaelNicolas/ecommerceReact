import { useContext, useState } from "react";
import "./Amount.css";
import { CarritoContext } from "../../../../context/CarritoContext";
import { AddedToCartContext } from "../../../../context/AddedToCartContext";
import { DisplayAddToCartContext } from "../../../../context/DisplayAddToCartContext";

function Amount({ id, img, title, stock, price, init }) {
	let [cantidad, setCantidad] = useState(init);
	const [carrito, setCarrito] = useContext(CarritoContext);
	const [addedToCart, setAddedToCart] = useContext(AddedToCartContext);
	const [addedToCartDisplay, setaddedToCartDisplay] = useContext(
		DisplayAddToCartContext
	);

	function sumar() {
		let cantidadYaEnCarrito;
		let carritoAuxiliar = carrito;
		let productoEncontrado = carritoAuxiliar.find((prod) => prod.id === id);
		if (productoEncontrado !== undefined) {
			cantidadYaEnCarrito = productoEncontrado.cantidad;
		} else {
			cantidadYaEnCarrito = 0;
		}
		cantidad >= 0 &&
		cantidad < stock &&
		cantidad + cantidadYaEnCarrito < stock
			? setCantidad(cantidad + 1)
			: alert("No hay mas Stock");
	}

	function restar() {
		cantidad > 0 && cantidad <= stock
			? setCantidad(cantidad - 1)
			: alert("Sume una cantidad mayor a 0");
	}

	function actualizarCantidad() {
		setCantidad(cantidad);
	}

	function agregarAlCarrito() {
		cantidad === 0
			? console.log("Primero selecciona la cantidad")
			: crearProducto();
	}

	function crearProducto() {
		let carritoAuxiliar;
		let productoEncontrado;

		const producto = {
			id: id,
			img: img,
			title: title,
			price: price.toFixed(2),
			stock: stock,
			cantidad: cantidad,
		};
		guardarEnAddedToCartContext(producto);
		carritoAuxiliar = carrito;
		productoEncontrado = carritoAuxiliar.find(
			(prod) => prod.id === producto.id
		);
		if (productoEncontrado === undefined) {
			almacenarEnCarrito(producto);
		} else {
			productoEncontrado.cantidad += cantidad;
			setCarrito(carritoAuxiliar);
		}
		setCantidad(init);
	}

	function guardarEnAddedToCartContext(prod) {
		setAddedToCart(prod);
	}

	function almacenarEnCarrito(prod) {
		let aux;
		aux = carrito;
		aux.push(prod);
		setCarrito(aux);
		setaddedToCartDisplay(true);
		setTimeout(() => {
			setaddedToCartDisplay(false);
		}, 1100);
	}

	return (
		<div className="productCardAmount">
			<i
				className="fas fa-arrow-down productCardAmountArrow"
				onClick={restar}
			/>
			<input
				className="productCardAmountInput"
				type="text"
				value={cantidad}
				onChange={actualizarCantidad}
			/>
			<i
				className="fas fa-arrow-up productCardAmountArrow"
				onClick={sumar}
			/>
			<i
				className="fas fa-cart-plus productCardAmountBuy"
				onClick={agregarAlCarrito}
			/>
		</div>
	);
}

export default Amount;
