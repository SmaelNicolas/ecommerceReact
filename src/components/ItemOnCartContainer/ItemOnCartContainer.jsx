import ItemOnCartContainerList from "./ItemOnCartContainerList/ItemOnCartContainerProduct";
import "./ItemOnCartContainer.css";

import { useContext } from "react";

import { CarritoContext } from "../../context/CarritoContext";

function ItemOnCartContainer() {
	const [carrito] = useContext(CarritoContext);

	return (
		<section className="ItemOnCartContainer">
			{carrito.map((producto) => (
				<div
					key={producto.id + "onCart"}
					className="ItemOnCartContainerListProduct"
				>
					<ItemOnCartContainerList
						img={producto.img}
						title={producto.title}
						cantidad={producto.cantidad}
						precio={producto.price * producto.cantidad}
					/>
				</div>
			))}
		</section>
	);
}

export default ItemOnCartContainer;
