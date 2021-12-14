import React from "react";

import "./Stock.css";
function Stock({ stock }) {
	return stock === 0 ? (
		// return <div className="stock">{stock}</div>;
		<div className="stock">No Stock</div>
	) : stock === 1 ? (
		<div className="stock effectStock">Last Unit</div>
	) : (
		<div className="stockNumber">
			<p> {stock}</p>
		</div>
	);
}

export default Stock;
