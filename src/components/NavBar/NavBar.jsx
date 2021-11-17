import Logo from "./Logo/Logo";
import Categorias from "./Categorias/Categorias";
import CarritoSeccion from "./Carrito/CarritoSeccion";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="navbar">
			<Logo />
			<Categorias />
			<CarritoSeccion />
		</nav>
	);
};

export default NavBar;
