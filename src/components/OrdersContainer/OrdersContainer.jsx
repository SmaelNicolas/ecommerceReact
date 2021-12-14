import { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import "./OrdersContainer.css";
import OrdersInfo from "./OrdersInfo/OrdersInfo";

function OrdersContainer() {
	const [search, setSearch] = useState();
	const [idOrder, setIdOrder] = useState();
	const [loader, setLoader] = useState();

	useEffect(() => {
		setSearch(false);
		setLoader(true);
		setTimeout(() => {
			setLoader(false);
		}, 2000);
	}, []);

	function searchFor(e) {
		e.preventDefault();
		setSearch(true);
		setIdOrder(document.getElementById("inputIdSearch").value);

		console.log(idOrder);
	}

	return loader ? (
		<LoadingScreen />
	) : !search ? (
		<section className="ordersContainer">
			<form className="ordersContainerForm">
				<input
					className="ordersContainerInput"
					type="text"
					placeholder="COPY ORDER ID"
					required
					id="inputIdSearch"
				/>
				<button className="ordersContainerButton" onClick={searchFor}>
					Search ID
				</button>
			</form>
		</section>
	) : (
		<OrdersInfo id={idOrder} />
	);
}

export default OrdersContainer;
