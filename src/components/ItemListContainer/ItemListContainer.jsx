import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Card from "./Card/Card";
import "./ItemListContainer.css";
import getFirestore from "../../firebase/Firebase";

const ItemListContainer = () => {
	const [producto, setProducts] = useState([]);
	const [loader, setLoader] = useState();

	const { idCategoria } = useParams();

	useEffect(() => {
		setLoader(true);

		const db = getFirestore();
		const dbQuery = db.collection("productos");
		dbQuery
			.get()
			.then((productos) => {
				let productosCompleto = productos.docs.map((prod) => ({
					id: prod.id,
					...prod.data(),
				}));
				if (idCategoria === undefined) {
					setProducts(productosCompleto);
				} else {
					setProducts(
						productosCompleto.filter(
							(prod) => prod.category === idCategoria
						)
					);
				}
			})
			.finally(() =>
				setTimeout(() => {
					setLoader(false);
				}, 2000)
			);
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
