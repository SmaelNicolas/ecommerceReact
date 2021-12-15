import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Icon.css";

const Icon = () => {
	return (
		<Link to={"/cart"} className="iconoCarrito">
			<FaCartArrowDown />
		</Link>
	);
};

export default Icon;
