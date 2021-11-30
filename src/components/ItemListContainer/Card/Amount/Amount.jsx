import { useContext, useState } from "react";
import "./Amount.css";
import { CarritoContext } from "../../../../context/CarritoContext";

function Amount({ id, img, title, stock, price, init }) {
	let [cantidad, setCantidad] = useState(init);
	const [carrito, setCarrito] = useContext(CarritoContext);

	function sumar() {
		cantidad >= 0 && cantidad < stock
			? setCantidad(cantidad + 1)
			: console.log("No hay mas Stock");
	}

	function restar() {
		cantidad > 0 && cantidad <= stock
			? setCantidad(cantidad - 1)
			: console.log("No hay mas Stock");
	}

	function actualizar() {
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
			price: price,
			stock: stock,
			cantidad: cantidad,
		};

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

		console.log(carrito);
	}

	function almacenarEnCarrito(prod) {
		let aux;
		aux = carrito;
		aux.push(prod);
		setCarrito(aux);
	}
	// function actualizarCarrito(prod) {
	// 	let aux;
	// 	aux = carrito;
	// 	aux = aux.filter((item) => item.id === prod.id);
	// 	aux.push(prod);
	// 	setCarrito(aux);
	// }

	// function existe(prod) {
	// 	let producto = carrito.find((producto) => producto.id === prod.id);

	// 	let esta;
	// 	esta = carrito.find((item) => item.id === prod.id);
	// 	return esta;
	// }

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
				onChange={actualizar}
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
