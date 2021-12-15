import Logo from "../NavBar/Logo/Logo";
import Cart from "../NavBar/Cart/Cart";
import Menu from "./Menu/Menu";
import "./NavBarResponsive.css";
import Orders from "../NavBar/Orders/Orders";

function NavBarResponsive() {
	return (
		<nav className="navbarResponsive" id="navbarResponsive">
			<Logo />
			<Cart />
			<Orders />
			<Menu />
		</nav>
	);
}

export default NavBarResponsive;
