import { useState, useEffect } from "react";
import { getFetch } from "../../functions/getFetch";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Card from "./Card/Card";
import "./ItemListContainer.css";
import { dataBase } from "../../firebase/Firebase";

const ItemListContainer = () => {
	const [producto, setProducts] = useState([]);
	const [loader, setLoader] = useState();

	const { idCategoria } = useParams();

	useEffect(() => {
		dataBase();

		getFetch
			.then((productos) => {
				if (idCategoria === undefined) {
					setProducts(productos);
				} else {
					setProducts(
						productos.filter(
							(prod) => prod.category === idCategoria
						)
					);
				}
				setLoader(true);
			})
			.catch((error) => console.log(error))
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
