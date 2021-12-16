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
import Stock from "../ItemListContainer/Card/Stock/Stock";

// Se crea el producto seleccionado con sus caracteristicas y la opcion de agregar al carrito

function ItemDescriptionContainer() {
	//hook para guardar el producto solicitado
	const [productoDescripcion, setProductsDescriptionFind] = useState([]);

	//loading effect
	const [loader, setLoader] = useState(true);

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

	return loader ? (
		<LoadingScreen />
	) : (
		<section className="ItemDescriptionContainer">
			<div
				key={`description${productoDescripcion.id}`}
				className="ItemDescription"
			>
				<Stock stock={productoDescripcion.stock} />
				<Title title={productoDescripcion.title} />
				<Image img={productoDescripcion.img} />
				<TextDescription text={productoDescripcion.description} />
				<Price price={productoDescripcion.price} />
				<AddToCart productoDescripcion={productoDescripcion} />
				<div id="alertMessageStock" className="alertMessage">
					<p className="alertMessageText">
						You have reached the maximum stock
					</p>
				</div>
				<div id="alertMessageStock0" className="alertMessage">
					<p className="alertMessageText">Select a valid stock</p>
				</div>
				<div id="alertMessageNoStock" className="alertMessage">
					<p className="alertMessageText">
						Select the number of products
					</p>
				</div>
			</div>
		</section>
	);
}

export default ItemDescriptionContainer;
