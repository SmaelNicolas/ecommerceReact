import "./Price.css";

function Price(props) {
	return <p className="productCardPrice"> US$ {props.price}</p>;
}

export default Price;
