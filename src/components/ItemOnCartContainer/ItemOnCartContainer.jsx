import { useContext } from "react";
import { useState, useEffect } from "react";

import { CarritoContext } from "../../context/CarritoContext";

import ItemOnCartContainerList from "./ItemOnCartContainerProduct/ItemOnCartContainerProduct";
import ItemOnCartContainerFinalizarCompra from "./ItemOnCartContainerFinalizarCompra/ItemOnCartContainerFinalizarCompra";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

import "./ItemOnCartContainer.css";
import { Link } from "react-router-dom";

//crea la lista de productos dentro del carrito

function ItemOnCartContainer() {
	//context para obtener el carrito
	const [carrito, setCarrito] = useContext(CarritoContext);

	//loading effect
	const [loader, setLoader] = useState(true);

	//hook para saber el total de productos y actualizarlos
	const [totalProductos, setTotalProductos] = useState(0);

	//hook para saber el total del precio y actualizarlos
	const [totalPrecio, setTotalPrecio] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1500);
	}, [loader]);

	useEffect(() => {
		let totalAuxiliar = 0;
		let precioAuxiliar = 0;
		carrito.forEach((producto) => {
			precioAuxiliar += parseFloat(producto.price) * producto.cantidad;
			totalAuxiliar += producto.cantidad;
		});
		precioAuxiliar = precioAuxiliar.toFixed(2);
		setTotalProductos(totalAuxiliar);
		setTotalPrecio(precioAuxiliar);
	}, [carrito]);

	function vaciar() {
		setCarrito([]);
	}

	function isEmpty() {
		return carrito.length === 0;
	}

	function listToDisplay() {
		return (
			<>
				<section className="ItemOnCartContainer">
					<div className="ItemOnCartContainerInfo">
						<div className="ItemOnCartContainerInfoCantidad">
							Cantidad = {totalProductos}
						</div>
						<div className="ItemOnCartContainerInfoPrecio">
							Us$ Total = {totalPrecio}
						</div>
					</div>
					<div className="ItemOnCartContainerList">
						{isEmpty() ? (
							<>
								<Link
									to="/"
									className="ItemOnCartContainerListVaciar"
								>
									HOME
								</Link>
								<div className="ItemOnCartContainerListVaciarMensaje">
									NO HAY ITEMS EN CARRITO
								</div>
							</>
						) : (
							<button
								className="ItemOnCartContainerListVaciar"
								onClick={vaciar}
							>
								VACIAR
							</button>
						)}
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
									precio={(
										producto.price * producto.cantidad
									).toFixed(2)}
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
