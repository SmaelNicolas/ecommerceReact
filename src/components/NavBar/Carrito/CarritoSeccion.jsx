import AddedToCartContainer from "../../AddedToCartContainer/AddedToCartContainer";
import CarritoPrecio from "./CarritoPrecio/CarritoPrecio";
import CarritoUnidades from "./CarritoUnidades/CarritoUnidades";
import IconoCarrito from "./IconoCarrito/IconoCarrito";

function CarritoSeccion() {
	return (
		<div className="carritoSeccion">
			<CarritoPrecio />
			<IconoCarrito />
			<AddedToCartContainer />
			<CarritoUnidades />
		</div>
	);
}

export default CarritoSeccion;
