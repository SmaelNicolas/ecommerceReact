import { productos } from "../data/productos";

export const getFetch = new Promise((accept, deny) => {
	accept(productos);
});
