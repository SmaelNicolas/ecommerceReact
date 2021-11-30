import "./CartListHover.css";

function CartListHover({ producto }) {
	return (
		<>
			<p className="cartListHoverTitle"> {producto.title} </p>
			<p className="cartListHoverPrice">
				{" "}
				US$ {producto.price * producto.cantidad}
			</p>
			<p className="cartListHoverCantidad">
				Cantidad: {producto.cantidad}
			</p>
		</>
	);
}

export default CartListHover;
