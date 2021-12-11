import Icon from "./Icon/Icon";
import Name from "./Name/Name";
import { Link } from "react-router-dom";

import "./Logo.css";

function Logo() {
	return (
		<Link to="/" className="seccionLogo">
			<Icon />
			<Name />
		</Link>
	);
}

export default Logo;
