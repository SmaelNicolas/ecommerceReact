import { Link } from "react-router-dom";
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
	const { cart, quantityItems, totalPrice } = useContext(CartContext);
	const [productAdded] = useContext(ProductAddedContext);

	function show() {
		cart.length === 0 ? setOnHover(false) : setOnHover(true);
	}
	function hide() {
		setOnHover(false);
	}

	return (
		<Link
			to={"/cart"}
			className="carritoSeccion"
			onMouseEnter={() => show()}
			onMouseLeave={() => hide()}
		>
			<Price price={totalPrice()} />
			<Icon />
			<Quantity cant={quantityItems()} />

			{productAdded.length !== 0 ? (
				<MesaggeAdded
					title={productAdded.title}
					cant={productAdded.quantity}
					price={productAdded.quantity * productAdded.price}
				/>
			) : undefined}
			{onHover ? <CartContainerHover /> : null}
		</Link>
	);
}

export default Cart;
