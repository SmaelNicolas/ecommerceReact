import { CartContext } from "../../../../context/CartContext";
import { useContext } from "react";

import "./Item.css";

function Item({ id, img, title, cantidad, precio }) {
	const [cart, setCart] = useContext(CartContext);

	function deleteItem() {
		let aux = cart;

		aux = aux.filter((producto) => producto.id !== id);
		setCart(aux);
	}
	return (
		<>
			<div className="ItemOnCartContainerProductImgContainer">
				<img
					className="ItemOnCartContainerProductImg"
					src={img}
					alt="producto a comprar"
				/>
			</div>
			<div className="ItemOnCartContainerProductInfo">
				<p className="ItemOnCartContainerProductTitle">{title}</p>
				<p className="ItemOnCartContainerProductCantidad">
					Cantidad : {cantidad}
				</p>
				<p className="ItemOnCartContainerProductPrecio">
					Precio : US$ {precio}
				</p>
			</div>
			<div className="ItemOnCartContainerProductDelete">
				<i
					className="fas fa-trash ItemOnCartContainerProductDeleteIcon"
					onClick={deleteItem}
				></i>
			</div>
		</>
	);
}

export default Item;
