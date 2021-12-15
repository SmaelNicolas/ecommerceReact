import { Link } from "react-router-dom";
import "./Price.css";

function Price({ price }) {
	return (
		<Link to={"/cart"} className="carritoPrecio">
			$ <span id="noDecoration">{price}</span>
		</Link>
	);
}

export default Price;
