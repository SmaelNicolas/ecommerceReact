import { Link } from "react-router-dom";

import "./Orders.css";

function Orders() {
	return (
		<Link className="orders" to={"/orders"}>
			Orders
		</Link>
	);
}

export default Orders;
