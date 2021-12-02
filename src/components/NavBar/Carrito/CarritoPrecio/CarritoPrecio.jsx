import "./CarritoPrecio.css";

function CarritoPrecio({ price }) {
	return (
		<div className="carritoPrecio">
			$ <span id="noDecoration">{price}</span>
		</div>
	);
}

export default CarritoPrecio;
