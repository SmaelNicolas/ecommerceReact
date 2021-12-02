import { useContext } from "react";
import { useState, useEffect } from "react";

import { CarritoContext } from "../../context/CarritoContext";

import ItemOnCartContainerList from "./ItemOnCartContainerProduct/ItemOnCartContainerProduct";
import ItemOnCartContainerFinalizarCompra from "./ItemOnCartContainerFinalizarCompra/ItemOnCartContainerFinalizarCompra";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

import "./ItemOnCartContainer.css";

function ItemOnCartContainer() {
	const [carrito, setCarrito] = useContext(CarritoContext);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1500);
	}, [loader]);

	function vaciar() {
		setCarrito([]);
	}

	function listToDisplay() {
		return (
			<>
				<section className="ItemOnCartContainer">
					<div className="ItemOnCartContainerList">
						<button
							className="ItemOnCartContainerListVaciar"
							onClick={vaciar}
						>
							Vaciar
						</button>
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
			</>
		);
	}

	return loader ? <LoadingScreen /> : listToDisplay();
}

export default ItemOnCartContainer;
