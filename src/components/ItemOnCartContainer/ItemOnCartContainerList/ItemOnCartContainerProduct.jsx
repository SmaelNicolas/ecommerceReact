import "./ItemOnCartContainerProduct.css";

function ItemOnCartContainerProduct({ img, title, cantidad, precio }) {
	return (
		<>
			<img
				className="ItemOnCartContainerListProductImg"
				src={img}
				alt="producto a comprar"
			/>
			<p className="ItemOnCartContainerListProductTitle">{title}</p>
			<p className="ItemOnCartContainerListProductCantidad">{cantidad}</p>
			<p className="ItemOnCartContainerListProductPrecio">{precio}</p>
		</>
	);
}

export default ItemOnCartContainerProduct;
