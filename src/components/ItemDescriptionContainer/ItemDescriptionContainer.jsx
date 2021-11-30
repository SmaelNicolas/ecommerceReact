import { useState, useEffect } from "react";
import { getFetch } from "../../functions/getFetch";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ItemDescriptionText from "./ItemDescriptionText/ItemDescriptionText";
import ItemDescriptionImage from "./ItemDescriptionImage/ItemDescriptionImage";
import ItemDescriptionPrice from "./ItemDescriptionPrice/ItemDescriptionPrice";
import ItemDescriptionTitle from "./ItemDescriptionTitle/ItemDescriptionTitle";
import ItemDescriptionAddCart from "./ItemDescriptionAddCart/ItemDescriptionAddCart";
import "./ItemDescriptionContainer.css";

function ItemDescriptionContainer() {
	const [productoDescripcion, setProductsDescriptionFind] = useState([]);
	const [loader, setLoader] = useState();

	const { idProducto } = useParams();

	useEffect(() => {
		getFetch
			.then((productos) => {
				setProductsDescriptionFind(
					productos.find(
						(element) => element.id === parseInt(idProducto)
					)
				);
				setLoader(true);
			})
			.catch((error) => console.log(error))
			.finally(() =>
				setTimeout(() => {
					setLoader(false);
				}, 1500)
			);
	}, [idProducto]);

	function listToDisplay() {
		return (
			<section className="ItemDescriptionContainer">
				<div
					key={`description${productoDescripcion.id}`}
					className="ItemDescription"
				>
					<ItemDescriptionTitle title={productoDescripcion.title} />
					<ItemDescriptionImage img={productoDescripcion.img} />
					<ItemDescriptionText
						text={productoDescripcion.description}
					/>
					<ItemDescriptionPrice price={productoDescripcion.price} />
					<ItemDescriptionAddCart
						productoDescripcion={productoDescripcion}
					/>
				</div>
			</section>
		);
	}

	return loader ? <LoadingScreen /> : listToDisplay();
}

export default ItemDescriptionContainer;
