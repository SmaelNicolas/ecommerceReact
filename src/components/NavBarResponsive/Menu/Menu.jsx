import Categories from "../../NavBar/Categories/Categories";
import { useState } from "react";
import "./Menu.css";

function Menu() {
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
			<Categories isActive={isActive} toggle={toggleClass} />
		</>
	);
}

export default Menu;
