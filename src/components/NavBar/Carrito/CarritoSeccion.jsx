import CarritoPrecio from "./CarritoPrecio/CarritoPrecio";
import CarritoUnidades from "./CarritoUnidades/CarritoUnidades";
import IconoCarrito from "./IconoCarrito/IconoCarrito";

function CarritoSeccion() {
  return (
    <div className="carritoSeccion">
      <CarritoPrecio />
      <IconoCarrito />
      <CarritoUnidades />
    </div>
  );
}

export default CarritoSeccion;
