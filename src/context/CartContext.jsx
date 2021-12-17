import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);

	const totalPrice = () => {
		return cart
			.reduce((totalP, prod) => totalP + prod.price * prod.quantity, 0)
			.toFixed(2);
	};

	const quantityItems = () => {
		return cart.reduce((totalQ, prod) => totalQ + prod.quantity, 0);
	};

	const emptyCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={[cart, setCart, totalPrice, quantityItems, emptyCart]}
		>
			{props.children}
		</CartContext.Provider>
	);
};
