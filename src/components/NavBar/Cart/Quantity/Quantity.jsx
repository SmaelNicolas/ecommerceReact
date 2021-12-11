import "./Quantity.css";

function Quantity({ cant }) {
	return (
		<div className="carritoUnidades" id="carritoUnidades">
			{cant}
		</div>
	);
}

export default Quantity;
