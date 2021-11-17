import Card from "./Card/Card";
import "./ItemListContainer.css";

const ItemListContainer = (prop) => {
	return (
		<section className="itemsContainer">
			{prop.producto.map((item) => (
				<Card item={item} />
			))}
		</section>
	);
};

export default ItemListContainer;
