import { Link } from "react-router-dom";
import "./Quantity.css";

function Quantity({ quantity }) {
	return (
		<Link to={"/cart"} className='carritoUnidades' id='carritoUnidades'>
			{quantity}
		</Link>
	);
}

export default Quantity;
