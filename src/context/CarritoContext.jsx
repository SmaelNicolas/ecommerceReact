import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
	const [carrito, setCarrito] = useState([]);

	return (
		<CarritoContext.Provider value={[carrito, setCarrito]}>
			{props.children}
		</CarritoContext.Provider>
	);
};
