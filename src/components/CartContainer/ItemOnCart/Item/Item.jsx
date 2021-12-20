import { CartContext } from "../../../../context/CartContext";
import { useContext } from "react";

import "./Item.css";

function Item({ id, img, title, quantity, price }) {
	const [cart, setCart] = useContext(CartContext);

	const deleteItem = () => {
		setCart(cart.filter((prod) => prod.id !== id));
	};

	return (
		<>
			<div className='ItemOnCartContainerProductImgContainer'>
				<img
					className='ItemOnCartContainerProductImg'
					src={img}
					alt='producto a comprar'
				/>
			</div>
			<div className='ItemOnCartContainerProductInfo'>
				<p className='ItemOnCartContainerProductTitle'>{title}</p>
				<p className='ItemOnCartContainerProductCantidad'>
					Quantity : {quantity}
				</p>
				<p className='ItemOnCartContainerProductPrecio'>
					Price : US$ {price}
				</p>
			</div>
			<div className='ItemOnCartContainerProductDelete'>
				<i
					className='fas fa-trash ItemOnCartContainerProductDeleteIcon'
					onClick={deleteItem}
				></i>
			</div>
		</>
	);
}

export default Item;
