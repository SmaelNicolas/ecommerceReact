import React, { createContext, useState } from "react";

export const DisplayAddToCartContext = createContext();

export const DisplayAddToCartProvider = (props) => {
	const [addedToCartDisplay, setAddedToCartDisplay] = useState(false);

	return (
		<DisplayAddToCartContext.Provider
			value={[addedToCartDisplay, setAddedToCartDisplay]}
		>
			{props.children}
		</DisplayAddToCartContext.Provider>
	);
};
