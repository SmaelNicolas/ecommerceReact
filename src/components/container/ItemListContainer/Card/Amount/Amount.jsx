function Amount() {
	return (
		<div className="productCardAmount">
			<i className="fas fa-arrow-down productCardAmountArrow"></i>
			<input className="productCardAmountInput" type="text" />
			<i className="fas fa-arrow-up productCardAmountArrow"></i>
			<i className="fas fa-cart-plus productCardAmountBuy"></i>
		</div>
	);
}

export default Amount;
