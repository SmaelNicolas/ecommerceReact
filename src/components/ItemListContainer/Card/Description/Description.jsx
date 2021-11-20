import { Link } from "react-router-dom";
import "./Description.css";

function Description(props) {
	// return <div className="productCardDescription">{props.description}</div>;

	return (
		<div className="productCardButtonContainer">
			<Link
				to="/descripcion/idproducto"
				className="productCardButtonDescription"
			>
				Caracteristicas
			</Link>
		</div>
	);
}

export default Description;
