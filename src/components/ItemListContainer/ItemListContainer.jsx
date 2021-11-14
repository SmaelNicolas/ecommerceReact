import Card from "./Card/Card";

const ItemListContainer = (prop) => {
	return (
		<section className="itemsContainer">
			{prop.producto.map(
				(item) => (
					<div key={item.id} className="productCard">
						<Card item={item} />
					</div>
				)
				// document.write(item.price);
			)}
		</section>
	);
};

export default ItemListContainer;
