import Image from "./Image/Image";
import Title from "./Title/Title";
import ButtonDescription from "./ButtonDescription/ButtonDescription";
import Price from "./Price/Price";
import Favorite from "./Favorite/Favorite";
import HowMany from "./HowMany/HowMany";
import "./Card.css";

// function Card({ img, title, description, price }) {
function Card({ item }) {
	return (
		<>
			<Favorite />
			<Image img={item.img} />
			<Title title={item.title} />
			<Price price={item.price} />
			<HowMany
				id={item.id}
				img={item.img}
				title={item.title}
				stock={item.stock}
				price={item.price}
				init={0}
			/>
			<ButtonDescription id={item.id} />
		</>
	);
}

export default Card;
