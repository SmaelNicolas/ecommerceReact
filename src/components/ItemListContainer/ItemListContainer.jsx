import { useState, useEffect } from "react";
import { getFetch } from "../../functions/getFetch";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Card from "./Card/Card";
import "./ItemListContainer.css";

const ItemListContainer = () => {
	const [producto, setProducts] = useState([]);
	const [productoFilter, setProductsFilter] = useState([]);
	const [loader, setLoader] = useState();

	const { idCategoria } = useParams();

	useEffect(() => {
		getFetch
			.then((productos) => {
				setProducts(productos);
				setProductsFilter(
					productos.filter((prod) => prod.category === idCategoria)
				);
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
		if (idCategoria === undefined) {
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
		} else {
			return loader ? (
				<LoadingScreen />
			) : (
				<section className="itemsContainer">
					{productoFilter.map((item) => (
						<div key={item.id} className="productCard">
							<Card item={item} />
						</div>
					))}
				</section>
			);
		}
	}

	return listToDisplay();
};

export default ItemListContainer;
