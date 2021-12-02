import { useContext } from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { CarritoContext } from "../../../../context/CarritoContext";
import CartListHover from "./CartListHover/CartListHover";
import "./CartContainerHover.css";

function CartContainerHover() {
	const [carrito, setCarrito] = useContext(CarritoContext);
	const [cantidad, setCantidad] = useState(0);
	const [precioTotal, setPrecioTotal] = useState(0);

	useEffect(() => {
		function setearTotales() {
			let cantidadAux = 0;
			let precioTotalAux = 0;

			carrito.forEach((producto) => {
				cantidadAux += producto.cantidad;
				precioTotalAux +=
					parseFloat(producto.price) * producto.cantidad;
			});
			precioTotalAux = precioTotalAux.toFixed(2);
			setCantidad(cantidadAux);
			setPrecioTotal(precioTotalAux);
		}
		setearTotales();
	}, []);

	function vaciar() {
		setCarrito([]);
	}

	return (
		<>
			<section className="cartContainer">
				<i className="fas fa-caret-up cartContainerTriangle "></i>
				<div className="cartContainerList">
					{carrito.map((producto) => (
						<div key={producto.id} className="CartListHoverProduct">
							<CartListHover producto={producto} />
						</div>
					))}
				</div>

				<div className="cartContainerInfo">
					<div className="cartContainerInfoTotalProducts">
						Products :
						<span className="cartContainerInfoTotalProductsNumber">
							{cantidad}
						</span>
					</div>
					<div className="cartContainerInfoTotalPrice">
						Total US$ :
						<span className="cartContainerInfoTotalPriceNumber">
							{precioTotal}
						</span>
					</div>
				</div>
				<div className="cartContainerBuy">
					<button className="cartContainerBuyButton">
						<Link
							to={`/cart`}
							className="cartContainerBuyButtonText"
						>
							COMPRAR
						</Link>
					</button>
					<button className="cartContainerBuyButton" onClick={vaciar}>
						<Link to={`/`} className="cartContainerBuyButtonText">
							Vaciar
						</Link>
					</button>
				</div>
			</section>
		</>
	);
}

export default CartContainerHover;
