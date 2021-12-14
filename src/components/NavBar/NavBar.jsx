import Logo from "./Logo/Logo";
import Categories from "./Categories/Categories";
import Cart from "./Cart/Cart";
import "./NavBar.css";
import Orders from "./Orders/Orders";

const NavBar = () => {
	return (
		<nav className="navbar">
			<Logo />
			<Categories />
			<Cart />
			<Orders />
		</nav>
	);
};

export default NavBar;
