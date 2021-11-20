import { Link } from "react-router-dom";

import "./Categorias.css";

function Categorias({ isActive, toggle }) {
	return (
		<ul className={isActive ? "lista listaHide" : "lista"}>
			<li
				onClick={toggle}
				className={
					!isActive ? "listaElement listaHide" : "listaElement "
				}
			>
				<Link to="/productos/teclados" className="listaLink">
					Teclados
				</Link>
			</li>

			<li
				onClick={toggle}
				className={
					!isActive ? "listaElement listaHide" : "listaElement "
				}
			>
				<Link to="/productos/auriculares" className="listaLink">
					Auriculares
				</Link>
			</li>

			<li
				onClick={toggle}
				className={
					!isActive ? "listaElement listaHide" : "listaElement "
				}
			>
				<Link to="/productos/mouses" className="listaLink">
					Mouses
				</Link>
			</li>

			<li
				onClick={toggle}
				className={
					!isActive ? "listaElement listaHide" : "listaElement "
				}
			>
				<Link to="/productos/pads" className="listaLink">
					Pads
				</Link>
			</li>
		</ul>
	);
}

export default Categorias;
