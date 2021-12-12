import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import TextDescription from "./TextDescription/TextDescription";
import Image from "./Image/Image";
import Price from "./Price/Price";
import Title from "./Title/Title";
import AddToCart from "./AddToCart/AddToCart";
import getFirestore from "../../firebase/Firebase";
import "./ItemDescriptionContainer.css";

// Se crea el producto seleccionado con sus caracteristicas y la opcion de agregar al carrito

function ItemDescriptionContainer() {
	//hook para guardar el producto solicitado
	const [productoDescripcion, setProductsDescriptionFind] = useState([]);

	//loading effect
	const [loader, setLoader] = useState();

	//id del producto obtenido desde la URL
	const { idProduct } = useParams();

	useEffect(() => {
		setLoader(true);

		//consulta firebase
		const db = getFirestore();
		const dbQuery = db.collection("productos").doc(idProduct);
		dbQuery
			.get()
			.then((producto) => {
				setProductsDescriptionFind({
					id: idProduct,
					...producto.data(),
				});
			})
			.finally(() =>
				setTimeout(() => {
					setLoader(false);
				}, 1500)
			);
	}, [idProduct]);

	function listToDisplay() {
		return (
			<section className="ItemDescriptionContainer">
				<div
					key={`description${productoDescripcion.id}`}
					className="ItemDescription"
				>
					<Title title={productoDescripcion.title} />
					<Image img={productoDescripcion.img} />
					<TextDescription text={productoDescripcion.description} />
					<Price price={productoDescripcion.price} />
					<AddToCart productoDescripcion={productoDescripcion} />
				</div>
			</section>
		);
	}

	return loader ? <LoadingScreen /> : listToDisplay();
}

export default ItemDescriptionContainer;
