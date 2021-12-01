import { useContext } from "react";
import { Link } from "react-router-dom";

import { CarritoContext } from "../../../../context/CarritoContext";
import CartListHover from "./CartListHover/CartListHover";
import "./CartContainerHover.css";

function CartContainerHover() {
	const [carrito] = useContext(CarritoContext);

	function calcularCantidad() {
		let cantidad = 0;

		carrito.forEach((producto) => {
			cantidad = producto.cantidad + cantidad;
		});
		return cantidad;
	}

	function calcularPrecio() {
		let precioTotal = 0;

		carrito.forEach((producto) => {
			precioTotal += producto.price * producto.cantidad;
		});

		return precioTotal.toFixed(2);
	}

	return (
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
						{calcularCantidad()}
					</span>
				</div>
				<div className="cartContainerInfoTotalPrice">
					Total US$ :
					<span className="cartContainerInfoTotalPriceNumber">
						{calcularPrecio()}
					</span>
				</div>
			</div>
			<div className="cartContainerBuy">
				<button className="cartContainerBuyButton">
					<Link to={`/cart`} className="cartContainerBuyButtonText">
						COMPRAR
					</Link>
				</button>
			</div>
		</section>
	);
}

export default CartContainerHover;
