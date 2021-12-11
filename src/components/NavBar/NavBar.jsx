import Logo from "./Logo/Logo";
import Categories from "./Categories/Categories";
import Cart from "./Cart/Cart";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="navbar">
			<Logo />
			<Categories />
			<Cart />
		</nav>
	);
};

export default NavBar;
