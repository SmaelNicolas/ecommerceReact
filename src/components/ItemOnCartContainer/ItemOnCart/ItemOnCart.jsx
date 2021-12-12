import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import Item from "./Item/Item";

import "./ItemOnCart.css";

function ItemOnCart() {
	const [cart] = useContext(CartContext);

	return (
		<div className="ItemOnCartContainerList">
			{cart.map((producto) => (
				<div
					key={producto.id + "onCart"}
					className="ItemOnCartContainerProduct"
				>
					<Item
						id={producto.id}
						img={producto.img}
						title={producto.title}
						cantidad={producto.cantidad}
						precio={(producto.price * producto.cantidad).toFixed(2)}
					/>
				</div>
			))}
		</div>
	);
}

export default ItemOnCart;
