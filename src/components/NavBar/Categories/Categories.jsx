import { Link } from "react-router-dom";

import "./Categories.css";

function Categories({ isActive, toggle }) {
	return (
		<ul className={isActive ? "lista listaHide" : "lista"}>
			<li
				onClick={toggle}
				className={
					!isActive ? "listaElement listaHide" : "listaElement "
				}
			>
				<Link to="/products/keyboards" className="listaLink">
					Keyboards
				</Link>
			</li>

			<li
				onClick={toggle}
				className={
					!isActive ? "listaElement listaHide" : "listaElement "
				}
			>
				<Link to="/products/headset" className="listaLink">
					Headsets
				</Link>
			</li>

			<li
				onClick={toggle}
				className={
					!isActive ? "listaElement listaHide" : "listaElement "
				}
			>
				<Link to="/products/mouses" className="listaLink">
					Mouses
				</Link>
			</li>

			<li
				onClick={toggle}
				className={
					!isActive ? "listaElement listaHide" : "listaElement "
				}
			>
				<Link to="/products/pads" className="listaLink">
					Pads
				</Link>
			</li>
		</ul>
	);
}

export default Categories;
