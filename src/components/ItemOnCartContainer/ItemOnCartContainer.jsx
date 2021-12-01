import ItemOnCartContainerList from "./ItemOnCartContainerProduct/ItemOnCartContainerProduct";
import ItemOnCartContainerFinalizarCompra from "./ItemOnCartContainerFinalizarCompra/ItemOnCartContainerFinalizarCompra";
import "./ItemOnCartContainer.css";

import { useContext } from "react";

import { CarritoContext } from "../../context/CarritoContext";

function ItemOnCartContainer() {
	const [carrito] = useContext(CarritoContext);

	return (
		<section className="ItemOnCartContainer">
			<div className="ItemOnCartContainerList">
				{carrito.map((producto) => (
					<div
						key={producto.id + "onCart"}
						className="ItemOnCartContainerProduct"
					>
						<ItemOnCartContainerList
							id={producto.id}
							img={producto.img}
							title={producto.title}
							cantidad={producto.cantidad}
							precio={producto.price * producto.cantidad}
						/>
					</div>
				))}
			</div>
			<ItemOnCartContainerFinalizarCompra />
		</section>
	);
}

export default ItemOnCartContainer;
