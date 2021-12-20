import { useState } from "react";
import { useContext } from "react";

import { ProductAddedContext } from "../../../context/ProductAddedContext";
import { CartContext } from "../../../context/CartContext";

import Price from "./Price/Price";
import Quantity from "./Quantity/Quantity";
import CartContainerHover from "./HoverOnCart/HoverOnCart";
import Icon from "./Icon/Icon";
import MesaggeAdded from "./MesaggeAdded/MesaggeAdded";

import "./Cart.css";

function Cart() {
	const [onHover, setOnHover] = useState(false);
	const [cart, , totalPrice, quantityItems] = useContext(CartContext);
	const [addedToCart] = useContext(ProductAddedContext);

	const show = () => {
		cart.length === 0 ? setOnHover(false) : setOnHover(true);
	};
	const hide = () => {
		setOnHover(false);
	};

	return (
		<div
			className='carritoSeccion'
			onMouseEnter={() => show()}
			onMouseLeave={() => hide()}
		>
			<Price price={totalPrice()} />
			<Icon />
			<Quantity quantity={quantityItems()} />

			{addedToCart.length !== 0 && (
				<MesaggeAdded
					title={addedToCart.title}
					quantity={addedToCart.quantity}
					price={addedToCart.quantity * addedToCart.price}
				/>
			)}
			{onHover && <CartContainerHover />}
		</div>
	);
}

export default Cart;
