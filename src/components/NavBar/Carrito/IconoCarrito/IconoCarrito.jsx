import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./IconoCarrito.css";

const IconoCarrito = () => {
	return (
		<Link to={"/cart"}>
			<i className="iconoCarrito">
				<FaCartArrowDown />
			</i>
		</Link>
	);
};

export default IconoCarrito;
