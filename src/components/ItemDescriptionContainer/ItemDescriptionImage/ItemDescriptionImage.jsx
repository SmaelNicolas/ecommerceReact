import "./ItemDescriptionImage.css";

function ItemDescriptionImage({ img }) {
	return (
		<div className="productItemDescriptionImage">
			<img className="ItemDescriptionImage" src={img} alt="Product" />
		</div>
	);
}

export default ItemDescriptionImage;
