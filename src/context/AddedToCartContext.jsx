import React, { createContext, useState } from "react";

export const AddedToCartContext = createContext();

export const AddedToCartProvider = (props) => {
	const [addedToCart, setAddedToCart] = useState([]);

	return (
		<AddedToCartContext.Provider value={[addedToCart, setAddedToCart]}>
			{props.children}
		</AddedToCartContext.Provider>
	);
};
