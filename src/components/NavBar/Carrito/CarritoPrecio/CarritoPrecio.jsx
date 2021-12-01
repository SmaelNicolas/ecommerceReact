import "./CarritoPrecio.css";

function CarritoPrecio({ price }) {
	return (
		<div className="carritoPrecio">
			$ <span id="carritoPrecioTotal">{price.toFixed(2)}</span>
		</div>
	);
}

export default CarritoPrecio;
