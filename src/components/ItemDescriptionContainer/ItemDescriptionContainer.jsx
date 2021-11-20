import { useState, useEffect } from "react";
import { getFetch } from "../../functions/getFetch";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Image from "../ItemListContainer/Card/Image/Image";
import Price from "../ItemListContainer/Card/Price/Price";
import Title from "../ItemListContainer/Card/Title/Title";
import ItemDescriptionText from "./ItemDescriptionText/ItemDescriptionText";
import "./ItemDescriptionContainer.css";
import Amount from "../ItemListContainer/Card/Amount/Amount";

function ItemDescriptionContainer() {
	const [productoDescripcion, setProductsDescriptionFilter] = useState([]);
	const [loader, setLoader] = useState(true);

	const { idProducto } = useParams();

	useEffect(() => {
		getFetch
			.then((productos) => {
				setProductsDescriptionFilter(
					productos.filter((prod) => prod.id === parseInt(idProducto))
				);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoader(false));
	}, [idProducto]);

	console.log(idProducto);
	console.log(productoDescripcion);

	return loader ? (
		<LoadingScreen />
	) : (
		<section className="ItemDescriptionContainer">
			{productoDescripcion.map((item) => (
				<div key={`description${item.id}`} className="ItemDescription">
					<Image img={item.img} />
					<ItemDescriptionText text={item.description} />
					<Price price={item.price} />
					<Title title={item.title} />
				</div>
			))}
		</section>
	);
}

export default ItemDescriptionContainer;
