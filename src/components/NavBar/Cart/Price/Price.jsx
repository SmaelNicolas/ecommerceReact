import "./Price.css";

function Price({ price }) {
	return (
		<div className="carritoPrecio">
			$ <span id="noDecoration">{price}</span>
		</div>
	);
}

export default Price;
