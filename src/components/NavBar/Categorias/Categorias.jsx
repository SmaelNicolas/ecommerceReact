import "./Categorias.css";

function Categorias({ isActive }) {
	return (
		<ul className={isActive ? "lista listaHide" : "lista"}>
			<li className="listaElement">
				<a className="listaLink" href="#teclados">
					Teclados
				</a>
			</li>

			<li className="listaElement">
				<a className="listaLink" href="#auriculares">
					Auriculares
				</a>
			</li>

			<li className="listaElement">
				<a className="listaLink" href="#mouses">
					Mouses
				</a>
			</li>

			<li className="listaElement">
				<a className="listaLink" href="#extras">
					Pads
				</a>
			</li>
		</ul>
	);
}

export default Categorias;
