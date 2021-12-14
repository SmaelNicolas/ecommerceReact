import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../../../../../context/CartContext";
import "./Item.css";

function Item({ product }) {
	const { cart, setCart } = useContext(CartContext);

	function deleteItem() {
		setCart(cart.filter((prod) => prod.id !== product.id));
	}

	return (
		<>
			<p className="cartListHoverTitle"> {product.title} </p>
			<p className="cartListHoverPrice">
				{" "}
				US$ {(product.price * product.quantity).toFixed(2)}
			</p>
			<p className="cartListHoverCantidad">
				QUANTITY: {product.quantity}
			</p>
			<Link to={""}>
				<i className="fas fa-trash" onClick={deleteItem}></i>
			</Link>
		</>
	);
}

export default Item;