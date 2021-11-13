import Image from "./Image/Image";
import Title from "./Title/Title";
import Description from "./Description/Description";
import Price from "./Price/Price";
import Favorite from "./Favorite/Favorite";

// function Card({ img, title, description, price }) {
function Card(props) {
	return (
		<>
			<Favorite />
			<Image img={props.item.img} />
			<Title title={props.item.title} />
			<Price price={props.item.price} />
			<Description description={props.item.description} />
		</>
	);
}

export default Card;
