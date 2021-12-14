import "./OrderData.css";

function OrderData({ data }) {
	function checkQuantity() {
		if (data.items.length > 1) {
			return (
				<>
					{data.items.map((item) => {
						return (
							<div className="orderItemsInfo" key={item.id}>
								<div className="itemImgContainer">
									<img
										className="itemImg"
										src={item.img}
										alt="product"
									/>
								</div>
								<div className="itemTitle">{item.title}</div>
								<div className="itemQuantity">
									{item.quantity}
								</div>
								<div className="itemPrice">
									{item.price * item.quantity}
								</div>
							</div>
						);
					})}
				</>
			);
		} else {
			return (
				<>
					<div className="orderItemsInfo" key={data.items[0].id}>
						<div className="itemImgContainer">
							<img
								className="itemImg"
								src={data.items[0].img}
								alt="product"
							/>
						</div>
						<div className="itemTitle">{data.items[0].title}</div>
						<div className="itemQuantity">
							{data.items[0].quantity}
						</div>
						<div className="itemPrice">
							{data.items[0].price * data.items[0].quantity}
						</div>
					</div>
				</>
			);
		}
	}

	return (
		<section className="order">
			<div className="orderItems">{checkQuantity()}</div>
			<div className="orderInfo">
				<div className="orderTotalId">Order ID: {data.id}</div>
				<div className="orderTotalPrice">
					Total Price: {data.totalPrice}
				</div>
				<div className="orderTotalItems">
					Total Prods: {data.totalItems}
				</div>
			</div>
		</section>
	);
}

export default OrderData;
