import HowMany from "../../ItemListContainer/Card/HowMany/HowMany";
import "../../ItemListContainer/Card/HowMany/HowMany.css";

import "./AddToCart.css";

function AddToCart({ prodDescription }) {
	return (
		<div className='ItemDescriptionAddCart'>
			<HowMany
				id={prodDescription.id}
				img={prodDescription.img}
				title={prodDescription.title}
				stock={prodDescription.stock}
				price={prodDescription.price}
				init={0}
			/>
		</div>
	);
}

export default AddToCart;
