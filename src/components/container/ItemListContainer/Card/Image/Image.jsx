function Image(props) {
	return (
		<div className="productCardImageContainer">
			<img className="productCardImage" src={props.img} alt="Product" />
		</div>
	);
}

export default Image;
