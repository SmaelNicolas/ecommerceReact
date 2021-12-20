import { useContext, useState } from "react";
import "./HowMany.css";
import { CartContext } from "../../../../context/CartContext";
import { ProductAddedContext } from "../../../../context/ProductAddedContext";

//chekea stock , agregar al carrito y no mostrar duplicados

function HowMany({ id, img, title, stock, price, init }) {
	//setea la cantidad en el input
	const [quantity, setQuantity] = useState(init);

	//context para obtener el carrito
	const [cart, setCart] = useContext(CartContext);

	//context para  mostrar el producto en el mensaje de item agregado al carrito
	const [, setAddedToCart] = useContext(ProductAddedContext);

	//se encarga de comprobar q la cantidad a agregar sea menor al stock , y si ya esta en el carrito incluye esa cantidad.
	const add = () => {
		let quantityInCart;
		let messageStockClasses =
			document.getElementById("alertMessageStock").classList;

		let productFinded = cart.find((prod) => prod.id === id);

		productFinded !== undefined
			? (quantityInCart = productFinded.quantity)
			: (quantityInCart = 0);

		quantity >= 0 && quantity < stock && quantity + quantityInCart < stock
			? setQuantity(quantity + 1)
			: setTimeout(() => {
					messageStockClasses.add("showMessage");
					setTimeout(() => {
						messageStockClasses.remove("showMessage");
					}, 1500);
			  }, 0);
	};

	//resta la cantidad en input, nunca menor a 0
	const subtract = () => {
		let messageStockIsZeroClasses =
			document.getElementById("alertMessageStock0").classList;

		quantity > 0 && quantity <= stock
			? setQuantity(quantity - 1)
			: setTimeout(() => {
					messageStockIsZeroClasses.add("showMessage");
					setTimeout(() => {
						messageStockIsZeroClasses.remove("showMessage");
					}, 1500);
			  }, 0);
	};

	//agrega x cantidad del producto al carrito
	const addToCart = () => {
		let messageNoStockClasses = document.getElementById(
			"alertMessageNoStock"
		).classList;

		quantity !== 0
			? initializeProduct()
			: setTimeout(() => {
					messageNoStockClasses.add("showMessage");
					setTimeout(() => {
						messageNoStockClasses.remove("showMessage");
					}, 1500);
			  }, 0);
	};

	//crea un nuevo producto igual , lo guarda en el carrito si no esta; si esta aumenta la cantidad.

	const initializeProduct = () => {
		let productFinded;

		//crea el producto
		const product = createProduct();

		//busca el producto y lo agrega o modifica la cantidad
		productFinded = cart.find((prod) => prod.id === product.id);

		productFinded === undefined
			? setTimeout(() => {
					storeInCart(product);
			  }, 100)
			: setTimeout(() => {
					productFinded.quantity += quantity;
					setCart(cart);
			  }, 100);

		//resetea el input a 0
		setQuantity(init);

		//para mostrar mensaje de agregado
		setAddedToCart(product);
		//cambia el estado del context para poder mostrar el mensaje
		setTimeout(() => {
			setAddedToCart([]);
		}, 1000);
	};

	const createProduct = () => {
		return {
			id: id,
			img: img,
			title: title,
			price: price,
			stock: stock,
			quantity: quantity,
		};
	};

	const update = () => {
		setQuantity(quantity);
	};

	const storeInCart = (prod) => {
		cart.push(prod);
		setCart(cart);
	};

	return (
		<div className='productCardAmount'>
			<i
				className='fas fa-arrow-down productCardAmountArrow'
				onClick={subtract}
			/>
			<input
				className='productCardAmountInput'
				type='text'
				value={quantity}
				onChange={update}
			/>
			<i
				className='fas fa-arrow-up productCardAmountArrow'
				onClick={add}
			/>
			<i
				className='fas fa-cart-plus productCardAmountBuy'
				onClick={addToCart}
			/>
		</div>
	);
}

export default HowMany;
