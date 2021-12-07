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
import getFirestore from "../../firebase/Firebase";

function ItemDescriptionContainer() {
	const [productoDescripcion, setProductsDescriptionFind] = useState([]);
	const [loader, setLoader] = useState();

	const { idProducto } = useParams();

	useEffect(() => {
		setLoader(true);
		console.log(idProducto);

		const db = getFirestore();
		const dbQuery = db.collection("productos");
		dbQuery
			.get()
			.then((productos) => {
				let productosCompleto = productos.docs.map((prod) => ({
					id: prod.id,
					...prod.data(),
				}));
				setProductsDescriptionFind(
					productosCompleto.find(
						(element) => element.id === idProducto
					)
				);
			})

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
