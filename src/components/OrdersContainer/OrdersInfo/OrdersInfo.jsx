import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getFirestore from "../../../firebase/Firebase";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";
import NoIdToShow from "./NoIdToShow/NoIdToShow";

import OrderData from "./OrderData/OrderData";

function OrdersInfo() {
	const { idOrder } = useParams();

	const [orderData, setOrderData] = useState([]);
	const [loader, setLoader] = useState(true);
	const [exists, setExists] = useState(false);

	useEffect(() => {
		const db = getFirestore();
		const dbQuery = db.collection("orders").doc(idOrder);
		dbQuery
			.get()
			.then((order) => {
				setExists(order.exists);
				setOrderData({
					id: idOrder,
					...order.data(),
				});
			})
			.finally(() =>
				setTimeout(() => {
					setLoader(false);
				}, 2500)
			);
	}, [loader, idOrder]);

	return loader ? (
		<LoadingScreen />
	) : exists === true ? (
		<OrderData data={orderData} />
	) : (
		<NoIdToShow />
	);
}

export default OrdersInfo;
