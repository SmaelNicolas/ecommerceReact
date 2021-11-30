import Amount from "../../ItemListContainer/Card/Amount/Amount";
import "../../ItemListContainer/Card/Amount/Amount.css";

import "./ItemDescriptionAddCart.css";

function ItemDescriptionAddCart({ productoDescripcion }) {
	return (
		<div className="ItemDescriptionAddCart">
			<Amount
				title={productoDescripcion.title}
				stock={productoDescripcion.stock}
				price={productoDescripcion.price}
				init={0}
			/>
		</div>
	);
}

export default ItemDescriptionAddCart;
