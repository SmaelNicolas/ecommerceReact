import Logo from "../NavBar/Logo/Logo";
import CarritoSeccion from "../NavBar/Carrito/CarritoSeccion";
import MenuResponsive from "./MenuResponsive/MenuResponsive";
import "./NavBarResponsive.css";

function NavBarResponsive() {
	return (
		<nav className="navbarResponsive" id="navbarResponsive">
			<Logo />
			<CarritoSeccion />
			<MenuResponsive />
		</nav>
	);
}

export default NavBarResponsive;
