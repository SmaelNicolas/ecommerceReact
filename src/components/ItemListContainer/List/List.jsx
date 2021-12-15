import Card from "../Card/Card";
import { useState, useEffect } from "react";

import "./List.css";

function List({ products }) {
	const [prodShow, setProdShow] = useState([]);
	const [page, setPage] = useState(1);
	const [itemsOnPage] = useState(4);
	const [maxPages] = useState(Math.ceil(products.length / itemsOnPage));

	useEffect(() => {
		setProdShow(
			products.slice(
				(page - 1) * itemsOnPage,
				(page - 1) * itemsOnPage + itemsOnPage
			)
		);
		function changeCursor() {
			if (page === maxPages) {
				document.getElementById("next").style.cursor = "no-drop";
			} else {
				document.getElementById("next").style.cursor = "pointer";
			}
			if (page === 1) {
				document.getElementById("prev").style.cursor = "no-drop";
			} else {
				document.getElementById("prev").style.cursor = "pointer";
			}
		}
		changeCursor();
	}, [page, itemsOnPage, maxPages, products]);

	function next(e) {
		e.preventDefault();

		if (page < maxPages) {
			setPage(page + 1);
		}
	}

	function prev(e) {
		e.preventDefault();
		if (page > 1) {
			setPage(page - 1);
		}
	}

	return (
		<>
			<section className="itemsContainer">
				{prodShow.map((item) => (
					<div key={item.id} className="productCard">
						<Card item={item} />
					</div>
				))}
			</section>
			<section className="pageControl">
				<button id="prev" className="buttonPrevNext" onClick={prev}>
					Prev
				</button>
				<p className="pageTextValue">{page}</p>
				<p className="pageText">OF</p>
				<p className="pageTextValue">{maxPages}</p>

				<button id="next" className="buttonPrevNext" onClick={next}>
					Next
				</button>
			</section>
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
		</>
	);
}

export default List;
