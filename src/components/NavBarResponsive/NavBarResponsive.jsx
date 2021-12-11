import Logo from "../NavBar/Logo/Logo";
import Cart from "../NavBar/Cart/Cart";
import Menu from "./Menu/Menu";
import "./NavBarResponsive.css";

function NavBarResponsive() {
	return (
		<nav className="navbarResponsive" id="navbarResponsive">
			<Logo />
			<Menu />
			<Cart />
		</nav>
	);
}

export default NavBarResponsive;
