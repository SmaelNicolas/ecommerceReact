import Card from "./Card/Card";
import "./ItemListContainer.css";

const ItemListContainer = (prop) => {
	return (
		<section className="itemsContainer">
			{prop.producto.map((item) => (
				<div key={item.id} className="productCard" draggable="true">
					<Card item={item} />
				</div>
			))}
		</section>
	);
};

export default ItemListContainer;
