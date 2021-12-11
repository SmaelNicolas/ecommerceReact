import { CarritoContext } from "../../../context/CarritoContext";
import { useContext } from "react";

import "./ItemOnCart.css";

function ItemOnCart({ id, img, title, cantidad, precio }) {
	const [carrito, setCarrito] = useContext(CarritoContext);

	function deleteItem() {
		let aux = carrito;

		aux = aux.filter((producto) => producto.id !== id);
		setCarrito(aux);
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

export default ItemOnCart;
