function cartContainer() {
	return (
		<section className="cartContainer">
			<i class="fas fa-caret-up cartContainerTriangle "></i>
			<div className="cartContainerList"></div>

			<div className="cartContainerInfo">
				<div className="cartContainerInfoTotalProducts">
					Products :
					<span className="cartContainerInfoTotalProductsNumber">
						15
					</span>
				</div>
				<div className="cartContainerInfoTotalPrice">
					Total US$ :
					<span className="cartContainerInfoTotalPriceNumber">
						35.000
					</span>
				</div>
			</div>
			<div className="cartContainerBuy">
				<button className="cartContainerBuyButton">COMPRAR</button>
			</div>
		</section>
	);
}

export default cartContainer;
