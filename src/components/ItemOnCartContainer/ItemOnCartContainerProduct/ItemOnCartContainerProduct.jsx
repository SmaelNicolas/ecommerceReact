import "./ItemOnCartContainerProduct.css";

function ItemOnCartContainerProduct({ img, title, cantidad, precio }) {
	return (
		<>
			<div className="ItemOnCartContainerProductImgContainer">
				<img
					className="ItemOnCartContainerProductImg"
					src={img}
					alt="producto a comprar"
				/>
			</div>
			<div className="ItemOnCartContainerProductInfo">
				<p className="ItemOnCartContainerProductTitle">{title}</p>
				<p className="ItemOnCartContainerProductCantidad">
					Cantidad : {cantidad}
				</p>
				<p className="ItemOnCartContainerProductPrecio">
					Precio : US$ {precio}
				</p>
			</div>
			<div className="ItemOnCartContainerProductDelete">
				<i className="fas fa-trash ItemOnCartContainerProductDeleteIcon"></i>
			</div>
		</>
	);
}

export default ItemOnCartContainerProduct;
