import { useContext, useState } from "react";
import "./HowMany.css";
import { CartContext } from "../../../../context/CartContext";
import { ProductAddedContext } from "../../../../context/ProductAddedContext";

//chekea stock , agregar al carrito y no mostrar duplicados

function HowMany({ id, img, title, stock, price, init }) {
	//setea la cantidad en el input
	let [quantity, setQuantity] = useState(init);

	//context para obtener el carrito
	const { cart, setCart } = useContext(CartContext);

	//context para  mostrar el producto en el mensaje de item agregado al carrito
	// eslint-disable-next-line
	const [productAdded, setProductAdded] = useContext(ProductAddedContext);

	//se encarga de comprobar q la cantidad a agregar sea menor al stock , y si ya esta en el carrito incluye esa cantidad.
	//TO-DO si finaliza compra restar stock
	function add() {
		let quantityInCart;
		let productFinded = cart.find((prod) => prod.id === id);
		if (productFinded !== undefined) {
			quantityInCart = productFinded.quantity;
		} else {
			quantityInCart = 0;
		}
		quantity >= 0 && quantity < stock && quantity + quantityInCart < stock
			? setQuantity(quantity + 1)
			: alert("No hay mas Stock");
	}

	//resta la cantidad en input, nunca menor a 0
	function subtract() {
		quantity > 0 && quantity <= stock
			? setQuantity(quantity - 1)
			: alert("Sume una cantidad mayor a 0");
	}

	//agrega x cantidad del producto al carrito
	function addToCart() {
		quantity === 0
			? alert("Primero selecciona la cantidad")
			: initializeProduct();
	}

	//crea un nuevo producto igual , lo guarda en el carrito si no esta; si esta aumenta la cantidad.

	function initializeProduct() {
		let cartAux;
		let productFinded;

		//crea el producto
		const producto = {
			id: id,
			img: img,
			title: title,
			price: price,
			stock: stock,
			quantity: quantity,
		};

		cartAux = cart;

		//busca el producto y lo agrega o modifica la cantidad
		productFinded = cartAux.find((prod) => prod.id === producto.id);
		if (productFinded === undefined) {
			storeInCart(producto);
		} else {
			productFinded.quantity += quantity;
			setCart(cartAux);
		}
		//resetea el input a 0
		setQuantity(init);

		//para mostrar mensaje de agregado
		setProductAdded(producto);
		//cambia el estado del context para poder mostrar el mensaje
		setTimeout(() => {
			setProductAdded([]);
		}, 1100);
	}

	function update() {
		setQuantity(quantity);
	}

	//lo guarda en un arreglo auxiliar y lo setea en el hook
	function storeInCart(prod) {
		let aux;
		aux = cart;
		aux.push(prod);
		setCart(aux);
	}

	return (
		<div className="productCardAmount">
			<i
				className="fas fa-arrow-down productCardAmountArrow"
				onClick={subtract}
			/>
			<input
				className="productCardAmountInput"
				type="text"
				value={quantity}
				onChange={update}
			/>
			<i
				className="fas fa-arrow-up productCardAmountArrow"
				onClick={add}
			/>
			<i
				className="fas fa-cart-plus productCardAmountBuy"
				onClick={addToCart}
			/>
		</div>
	);
}

export default HowMany;
