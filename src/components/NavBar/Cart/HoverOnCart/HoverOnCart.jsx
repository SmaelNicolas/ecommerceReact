import List from "./List/List";
import "./HoverOnCart.css";
import Info from "./Info/Info";
import ButtonsDisplay from "./ButtonsDisplay/ButtonsDisplay";

function HoverOnCart() {
	return (
		<section className="cartContainer">
			<i className="fas fa-caret-up cartContainerTriangle "></i>
			<List />
			<Info />
			<ButtonsDisplay />
		</section>
	);
}

export default HoverOnCart;
