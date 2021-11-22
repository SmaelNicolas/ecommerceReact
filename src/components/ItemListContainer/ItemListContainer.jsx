import { useState, useEffect } from "react";
import { getFetch } from "../../functions/getFetch";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Card from "./Card/Card";
import "./ItemListContainer.css";

const ItemListContainer = () => {
	const [producto, setProducts] = useState([]);
	const [productoFilter, setProductsFilter] = useState([]);
	const [loader, setLoader] = useState(true);

	const { idCategoria } = useParams();

	useEffect(() => {
		getFetch
			.then((productos) => {
				setProducts(productos);
				setProductsFilter(
					productos.filter((prod) => prod.category === idCategoria)
				);
			})
			.catch((error) => console.log(error))
			.finally(() =>
				setTimeout(() => {
					console.log("finally en item List Container");
					setLoader(false);
				}, 3000)
			);
	}, [idCategoria]);

	function listToDisplay() {
		if (idCategoria === undefined) {
			return (
				<section className="itemsContainer">
					{producto.map((item) => (
						<div
							key={item.id}
							className="productCard"
							draggable="true"
						>
							<Card item={item} />
						</div>
					))}
				</section>
			);
		} else {
			return (
				<section className="itemsContainer">
					{productoFilter.map((item) => (
						<div
							key={item.id}
							className="productCard"
							draggable="true"
						>
							<Card item={item} />
						</div>
					))}
				</section>
			);
		}
	}

	return loader ? <LoadingScreen /> : listToDisplay();
};

export default ItemListContainer;
