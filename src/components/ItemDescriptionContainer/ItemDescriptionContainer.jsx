import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ItemDescriptionText from "./ItemDescriptionText/ItemDescriptionText";
import ItemDescriptionImage from "./ItemDescriptionImage/ItemDescriptionImage";
import ItemDescriptionPrice from "./ItemDescriptionPrice/ItemDescriptionPrice";
import ItemDescriptionTitle from "./ItemDescriptionTitle/ItemDescriptionTitle";
import ItemDescriptionAddCart from "./ItemDescriptionAddCart/ItemDescriptionAddCart";
import getFirestore from "../../firebase/Firebase";
import "./ItemDescriptionContainer.css";

// Se crea el producto seleccionado con sus caracteristicas y la opcion de agregar al carrito

function ItemDescriptionContainer() {
	//hook para guardar el producto solicitado
	const [productoDescripcion, setProductsDescriptionFind] = useState([]);

	//loading effect
	const [loader, setLoader] = useState();

	//id del producto obtenido desde la URL
	const { idProducto } = useParams();

	useEffect(() => {
		setLoader(true);

		//consulta firebase
		const db = getFirestore();
		const dbQuery = db.collection("productos").doc(idProducto);
		dbQuery
			.get()
			.then((producto) => {
				setProductsDescriptionFind({
					id: idProducto,
					...producto.data(),
				});
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
