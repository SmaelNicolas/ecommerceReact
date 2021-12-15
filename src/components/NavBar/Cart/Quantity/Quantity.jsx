import { Link } from "react-router-dom";
import "./Quantity.css";

function Quantity({ cant }) {
	return (
		<Link to={"/cart"} className="carritoUnidades" id="carritoUnidades">
			{cant}
		</Link>
	);
}

export default Quantity;
