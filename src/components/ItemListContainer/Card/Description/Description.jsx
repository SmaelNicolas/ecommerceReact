import { Link } from "react-router-dom";
import "./Description.css";

function Description({ id }) {
	// return <div className="productCardDescription">{props.description}</div>;

	return (
		<div className="productCardButtonContainer">
			<Link
				to={`/descripcion/${id}`}
				className="productCardButtonDescription"
			>
				Caracteristicas
			</Link>
		</div>
	);
}

export default Description;
