import { useContext, useState } from "react";
import "./HowMany.css";
import { CartContext } from "../../../../context/CartContext";
import { ProductAddedContext } from "../../../../context/ProductAddedContext";

//chekea stock , agregar al carrito y no mostrar duplicados

function HowMany({ id, img, title, stock, price, init }) {
	//setea la cantidad en el input
	let [cantidad, setCantidad] = useState(init);

	//context para obtener el carrito
	const [cart, setCart] = useContext(CartContext);

	//context para  mostrar el producto en el mensaje de item agregado al carrito
	// eslint-disable-next-line
	const [productAdded, setProductAdded] = useContext(ProductAddedContext);

	//se encarga de comprobar q la cantidad a agregar sea menor al stock , y si ya esta en el carrito incluye esa cantidad.
	//TO-DO si finaliza compra restar stock
	function sumar() {
		let cantidadYaEnCarrito;
		let productoEncontrado = cart.find((prod) => prod.id === id);
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

	//resta la cantidad en input, nunca menor a 0
	function restar() {
		cantidad > 0 && cantidad <= stock
			? setCantidad(cantidad - 1)
			: alert("Sume una cantidad mayor a 0");
	}

	//agrega x cantidad del producto al carrito
	function agregarAlCarrito() {
		cantidad === 0
			? alert("Primero selecciona la cantidad")
			: crearProducto();
	}

	//crea un nuevo producto igual , lo guarda en el carrito si no esta; si esta aumenta la cantidad.

	function crearProducto() {
		let carritoAuxiliar;
		let productoEncontrado;

		//crea el producto
		const producto = {
			id: id,
			img: img,
			title: title,
			price: price,
			stock: stock,
			cantidad: cantidad,
		};

		carritoAuxiliar = cart;

		//busca el producto y lo agrega o modifica la cantidad
		productoEncontrado = carritoAuxiliar.find(
			(prod) => prod.id === producto.id
		);
		if (productoEncontrado === undefined) {
			almacenarEnCarrito(producto);
		} else {
			productoEncontrado.cantidad += cantidad;
			setCart(carritoAuxiliar);
		}
		//resetea el input a 0
		setCantidad(init);

		//para mostrar mensaje de agregado
		setProductAdded(producto);
		//cambia el estado del context para poder mostrar el mensaje
		setTimeout(() => {
			setProductAdded([]);
		}, 1100);
	}

	function actualizarCantidad() {
		setCantidad(cantidad);
	}

	//lo guarda en un arreglo auxiliar y lo setea en el hook
	function almacenarEnCarrito(prod) {
		let aux;
		aux = cart;
		aux.push(prod);
		setCart(aux);
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

export default HowMany;
