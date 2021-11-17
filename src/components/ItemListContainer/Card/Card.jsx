import Image from "./Image/Image";
import Title from "./Title/Title";
import Description from "./Description/Description";
import Price from "./Price/Price";
import Favorite from "./Favorite/Favorite";
import Amount from "./Amount/Amount";
import "./Card.css";

// function Card({ img, title, description, price }) {
function Card(props) {
	return (
		<div key={props.item.id} className="productCard" draggable="true">
			<Favorite />
			<Image img={props.item.img} />
			<Title title={props.item.title} />
			<Price price={props.item.price} />
			<Amount
				title={props.item.title}
				stock={props.item.stock}
				price={props.item.price}
			/>
			<Description description={props.item.description} />
		</div>
	);
}

export default Card;
