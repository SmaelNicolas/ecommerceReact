import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderGeneratedContext } from "../../../../context/OrderGeneratedContext";

import "./ValidPurchaseScreen.css";

function ValidPurchaseScreen({ idOrder }) {
	const { setIsGenerated } = useContext(OrderGeneratedContext);

	function setToFalse() {
		setIsGenerated(false);
	}

	return (
		<section className="ValidPurchaseScreen">
			<p>Your order has been created successfully</p>
			<p>Order ID :</p>
			<span className="ValidPurchaseScreenId" id="valueToCopy">
				{idOrder}
			</span>

			<div class="tooltip">
				<i
					class="fas fa-copy"
					onClick={() => navigator.clipboard.writeText(idOrder)}
				></i>
				<span class="tooltiptext">Copy!</span>
			</div>
			<Link
				to={"/"}
				className="ValidPurchaseScreenHome"
				onClick={setToFalse}
			>
				HOME
			</Link>
		</section>
	);
}

export default ValidPurchaseScreen;
