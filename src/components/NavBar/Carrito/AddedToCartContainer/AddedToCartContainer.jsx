import "./AddedToCartContainer.css";

function AddedToCartContainer({ title, price, amount }) {
	return (
		<section className="addedToCartContainer">
			<i className="fas fa-caret-up addedToCartContainerTriangle"></i>
			<div className="addedToCartContainerInfo">
				<h3 className="addedToCartContainerInfoTitle">{title}</h3>
				<p className="addedToCartContainerInfoPrice">
					Usd
					<span className="addedToCartContainerInfoPriceNumber">
						{price}
					</span>
				</p>
			</div>
			<div className="addedToCartContainerAmount">{amount}</div>
			<i className="fas fa-trash-alt addedToCartContainerDelete"></i>
		</section>
	);
}

export default AddedToCartContainer;
