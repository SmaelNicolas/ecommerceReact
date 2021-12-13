import Card from "../Card/Card";

function List({ products }) {
	return (
		<section className="itemsContainer">
			{products.map((item) => (
				<div key={item.id} className="productCard">
					<Card item={item} />
				</div>
			))}
		</section>
	);
}

export default List;
