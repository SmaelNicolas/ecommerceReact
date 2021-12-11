import "./MesaggeAdded.css";

function MesaggeAdded({ title, price, cant }) {
	return (
		<section className="addedToCartContainer">
			<i className="fas fa-caret-up addedToCartContainerTriangle"></i>
			<div className="addedToCartContainerInfo">
				<h3 className="addedToCartContainerInfoTitle">{title}</h3>
				<p className="addedToCartContainerInfoPrice">
					Usd
					<span className="addedToCartContainerInfoPriceNumber">
						{price.toFixed(2)}
					</span>
				</p>
			</div>
			<div className="addedToCartContainerAmount">{cant}</div>
		</section>
	);
}

export default MesaggeAdded;
