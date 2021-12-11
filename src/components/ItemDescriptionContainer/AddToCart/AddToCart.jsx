import HowMany from "../../ItemListContainer/Card/HowMany/HowMany";
import "../../ItemListContainer/Card/HowMany/HowMany.css";

import "./AddToCart.css";

function AddToCart({ productoDescripcion }) {
	return (
		<div className="ItemDescriptionAddCart">
			<HowMany
				id={productoDescripcion.id}
				img={productoDescripcion.img}
				title={productoDescripcion.title}
				stock={productoDescripcion.stock}
				price={productoDescripcion.price}
				init={0}
			/>
		</div>
	);
}

export default AddToCart;
