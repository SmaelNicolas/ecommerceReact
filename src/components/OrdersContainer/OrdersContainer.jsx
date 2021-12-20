import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import "./OrdersContainer.css";

function OrdersContainer() {
	const [idOrder, setIdOrder] = useState();
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setLoader(true);
		setTimeout(() => {
			setLoader(false);
		}, 2000);
	}, []);

	const updateValue = () => {
		setIdOrder(document.getElementById("inputIdSearch").value);
	};

	return loader ? (
		<LoadingScreen />
	) : (
		<section className='ordersContainer'>
			<form className='ordersContainerForm'>
				<input
					className='ordersContainerInput'
					type='text'
					placeholder='COPY ORDER ID'
					required
					id='inputIdSearch'
					onChange={updateValue}
				/>
				<Link
					to={`/orders/${idOrder}`}
					className='ordersContainerButton'
				>
					Search ID
				</Link>
			</form>
		</section>
	);
}

export default OrdersContainer;
