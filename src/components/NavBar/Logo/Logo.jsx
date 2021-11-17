import LogoIcono from "./LogoIcono/LogoIcono";
import LogoTexto from "./LogoNombre/LogoNombre";
import "./Logo.css";

function Logo() {
	return (
		<section className="seccionLogo">
			<LogoIcono />
			<LogoTexto />
		</section>
	);
}

export default Logo;
