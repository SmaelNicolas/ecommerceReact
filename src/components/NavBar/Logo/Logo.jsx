import LogoIcono from "./LogoIcono/LogoIcono";
import LogoTexto from "./LogoNombre/LogoNombre";
import { Link } from "react-router-dom";

import "./Logo.css";

function Logo() {
	return (
		<Link to="/" className="seccionLogo">
			<LogoIcono />
			<LogoTexto />
		</Link>
	);
}

export default Logo;
