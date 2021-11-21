import { useState, useEffect } from "react";
import { getFetch } from "../../functions/getFetch";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Image from "../ItemListContainer/Card/Image/Image";
import Price from "../ItemListContainer/Card/Price/Price";
import Title from "../ItemListContainer/Card/Title/Title";
import ItemDescriptionText from "./ItemDescriptionText/ItemDescriptionText";
import "./ItemDescriptionContainer.css";

function ItemDescriptionContainer() {
	let [productoDescripcion, setProductsDescriptionFind] = useState([]);
	const [loader, setLoader] = useState(true);

	const { idProducto } = useParams();

	useEffect(() => {
		getFetch
			.then((productos) => {
				setProductsDescriptionFind(
					productos.find(
						(element) => element.id === parseInt(idProducto)
					)
				);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoader(false));
	}, [idProducto]);

	return loader ? (
		<LoadingScreen />
	) : (
		<section className="ItemDescriptionContainer">
			<div
				key={`description${productoDescripcion.id}`}
				className="ItemDescription"
			>
				<Image img={productoDescripcion.img} />
				<ItemDescriptionText text={productoDescripcion.description} />
				<Price price={productoDescripcion.price} />
				<Title title={productoDescripcion.title} />
			</div>
		</section>
	);
}

export default ItemDescriptionContainer;
