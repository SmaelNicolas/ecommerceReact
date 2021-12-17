import React, { createContext, useState } from "react";

export const OrderGeneratedContext = createContext();

export const OrderGeneratedProvider = (props) => {
	const [isGenerated, setIsGenerated] = useState(false);
	const [idOrder, setIdOrder] = useState();

	return (
		<OrderGeneratedContext.Provider
			value={[isGenerated, setIsGenerated, idOrder, setIdOrder]}
		>
			{props.children}
		</OrderGeneratedContext.Provider>
	);
};
