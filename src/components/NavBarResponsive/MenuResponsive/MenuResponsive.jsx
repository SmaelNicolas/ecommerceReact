import Categorias from "../../NavBar/Categorias/Categorias";
import { useState } from "react";
import "./MenuResponsive.css";

function MenuResponsive() {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};
	return (
		<>
			<i
				className="fas fa-bars menuResponsiveIcon"
				id="menuResponsiveIcon"
				onClick={() => {
					toggleClass();
				}}
			></i>
			<Categorias isActive={isActive} />
		</>
	);
}

export default MenuResponsive;
