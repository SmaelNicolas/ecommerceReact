import Logo from "../NavBar/Logo/Logo";
import CarritoSeccion from "../NavBar/Carrito/CarritoSeccion";
import MenuResponsive from "./MenuResponsive/MenuResponsive";

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
