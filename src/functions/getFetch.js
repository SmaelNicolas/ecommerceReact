import { productos } from "../data/productos";

export const getFetch = new Promise((accept, deny) => {
	setTimeout(() => {
		accept(productos);
	}, 3000);
});
