import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Card from "./Card/Card";
import "./ItemListContainer.css";
import getFirestore from "../../firebase/Firebase";

//se crea la lista de todos los productos disponibles en cards y la posibilidad de sumarlos al carrito
// lista de todos o lista x categoria.

const ItemListContainer = () => {
	//array de los productos
	const [producto, setProducts] = useState([]);

	//loading effect
	const [loader, setLoader] = useState();

	//categoria para filtrar productos
	const { idCategoria } = useParams();

	useEffect(() => {
		setLoader(true);

		//consulta firebase
		const db = getFirestore();

		if (idCategoria === undefined) {
			const dbQuery = db.collection("productos");
			dbQuery
				.get()
				.then((productos) => {
					setProducts(
						productos.docs.map((prod) => ({
							id: prod.id,
							...prod.data(),
						}))
					);
				})
				.finally(() =>
					setTimeout(() => {
						setLoader(false);
					}, 2000)
				);
		} else {
			const dbQuery = db
				.collection("productos")
				.where("category", "==", idCategoria);
			dbQuery
				.get()
				.then((productos) => {
					setProducts(
						productos.docs.map((prod) => ({
							id: prod.id,
							...prod.data(),
						}))
					);
				})
				.finally(() =>
					setTimeout(() => {
						setLoader(false);
					}, 2000)
				);
		}
	}, [idCategoria]);

	function listToDisplay() {
		return loader ? (
			<LoadingScreen />
		) : (
			<section className="itemsContainer">
				{producto.map((item) => (
					<div key={item.id} className="productCard">
						<Card item={item} />
					</div>
				))}
			</section>
		);
	}

	return listToDisplay();
};

export default ItemListContainer;
