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
				<Link to="/products/teclados" className="listaLink">
					Teclados
				</Link>
			</li>

			<li
				onClick={toggle}
				className={
					!isActive ? "listaElement listaHide" : "listaElement "
				}
			>
				<Link to="/products/auriculares" className="listaLink">
					Auriculares
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
