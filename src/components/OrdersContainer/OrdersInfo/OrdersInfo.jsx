import { useEffect, useState } from "react";

import getFirestore from "../../../firebase/Firebase";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";

import OrderData from "./OrderData/OrderData";

function OrdersInfo({ id }) {
	const [orderData, setOrderData] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		const db = getFirestore();
		const dbQuery = db.collection("orders").doc(id);
		dbQuery
			.get()
			.then((order) => {
				setOrderData({
					id: id,
					...order.data(),
				});
			})
			.finally(() =>
				setTimeout(() => {
					setLoader(false);
				}, 1500)
			);
	}, [loader]);

	return loader ? <LoadingScreen /> : <OrderData data={orderData} />;
}

export default OrdersInfo;
