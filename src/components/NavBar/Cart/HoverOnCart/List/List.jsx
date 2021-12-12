import { useContext } from "react";

import { CartContext } from "../../../../../context/CartContext";
import Item from "./Item/Item";
import "./List.css";

function List() {
	const [cart] = useContext(CartContext);

	return (
		<div className="cartContainerList">
			{cart.map((product) => (
				<div
					key={"hoverC" + product.id}
					className="CartListHoverProduct"
				>
					<Item product={product} />
				</div>
			))}
		</div>
	);
}

export default List;
