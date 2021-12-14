import { useEffect, useState } from "react";
import LoadingScreen from "../../../LoadingScreen/LoadingScreen";

import "./OrderData.css";

function OrderData({ data }) {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setLoader(true);
		setTimeout(() => {
			setLoader(false);
		}, 2500);
	}, []);

	return loader ? (
		<LoadingScreen />
	) : (
		<section className="order">
			<div className="orderItems">
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
							<div className="itemQuantity">{item.quantity}</div>
							<div className="itemPrice">
								{item.price * item.quantity}
							</div>
						</div>
					);
				})}
			</div>
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
