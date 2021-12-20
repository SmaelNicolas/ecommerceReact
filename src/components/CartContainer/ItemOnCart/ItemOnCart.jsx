import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import Item from "./Item/Item";

import "./ItemOnCart.css";

function ItemOnCart() {
	const [cart] = useContext(CartContext);

	return (
		<div className='ItemOnCartContainerList'>
			{cart.map((product) => (
				<div
					key={product.id + "onCart"}
					className='ItemOnCartContainerProduct'
				>
					<Item
						id={product.id}
						img={product.img}
						title={product.title}
						cantidad={product.quantity}
						precio={(product.price * product.quantity).toFixed(2)}
					/>
				</div>
			))}
		</div>
	);
}

export default ItemOnCart;
