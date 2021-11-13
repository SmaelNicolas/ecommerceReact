import Card from "./Card/Card";
import { productos } from "../../../data/productos";

const ItemListContainer = () => {
	return (
		<section className="itemsContainer">
			{productos.map(
				(item) => (
					<div key={item.id} className="productCard">
						{/* <Card
							title={item.title}
							img={item.img}
							description={item.description}
							price={item.price}
						/> */}
						<Card item={item} />
					</div>
				)
				// document.write(item.price);
			)}
		</section>
	);
};

export default ItemListContainer;
