function Amount() {
	return (
		<div className="productCardAmount">
			<i class="fas fa-arrow-down productCardAmountArrow"></i>
			<input className="productCardAmountInput" type="text" />
			<i class="fas fa-arrow-up productCardAmountArrow"></i>
			<i class="fas fa-cart-plus productCardAmountBuy"></i>
		</div>
	);
}

export default Amount;
