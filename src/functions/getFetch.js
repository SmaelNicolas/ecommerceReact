import { productos } from "../data/productos";

export const getFetch = new Promise((accept, deny) => {
	// accept(productos);
	// setTimeout(() => {
	accept(productos);
	// }, 3000);
});
