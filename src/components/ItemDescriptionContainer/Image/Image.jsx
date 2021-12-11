import "./Image.css";

function Image({ img }) {
	return (
		<div className="productItemDescriptionImage">
			<img className="ItemDescriptionImage" src={img} alt="Product" />
		</div>
	);
}

export default Image;
