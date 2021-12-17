import "./Image.css";

function Image({ img }) {
	return (
		<div className="productCardImageContainer">
			<img className="productCardImage" src={img} alt="Product" />
		</div>
	);
}

export default Image;
