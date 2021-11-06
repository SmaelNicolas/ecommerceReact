import Logo from "./Logo/Logo";
import Categorias from "./Categorias/Categorias";
import IconoCarrito from "./IconoCarrito/IconoCarrito";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Categorias />
      <IconoCarrito />
    </nav>
  );
};

export default NavBar;
