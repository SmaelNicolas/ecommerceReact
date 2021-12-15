import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import List from "./List/List";
import "./ItemListContainer.css";
import getFirestore from "../../firebase/Firebase";

//se crea la lista de todos los productos disponibles en cards y la posibilidad de sumarlos al carrito
// lista de todos o lista x categoria.

const ItemListContainer = () => {
	//array de los productos
	const [products, setProducts] = useState([]);

	//loading effect
	const [loader, setLoader] = useState(true);

	//categoria para filtrar productos
	const { idCategory } = useParams();

	useEffect(() => {
		setLoader(true);

		//consulta firebase
		const db = getFirestore();
		const queryCollection = db.collection("productos");
		let queryProducts;

		idCategory === undefined
			? (queryProducts = queryCollection)
			: (queryProducts = queryCollection.where(
					"category",
					"==",
					idCategory
			  ));

		queryProducts
			.get()
			.then((prods) => {
				setProducts(
					prods.docs.map((prod) => ({
						id: prod.id,
						...prod.data(),
					}))
				);
			})
			.finally(() =>
				setTimeout(() => {
					setLoader(false);
				}, 2500)
			);
	}, [idCategory]);

	return loader ? <LoadingScreen /> : <List products={products} />;
};

export default ItemListContainer;
