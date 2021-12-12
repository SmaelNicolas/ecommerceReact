import React, { createContext, useState } from "react";

export const ProductAddedContext = createContext();

export const ProductAddedProvider = (props) => {
	const [addedToCart, setAddedToCart] = useState([]);

	return (
		<ProductAddedContext.Provider value={[addedToCart, setAddedToCart]}>
			{props.children}
		</ProductAddedContext.Provider>
	);
};
