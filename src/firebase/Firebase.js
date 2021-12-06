import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyAz2vdnMvNy_yKIkHf3FZHNET3p16PfjHs",
	authDomain: "drag-on-6a228.firebaseapp.com",
	projectId: "drag-on-6a228",
	storageBucket: "drag-on-6a228.appspot.com",
	messagingSenderId: "211552814355",
	appId: "1:211552814355:web:cb99d759cbaf4201d886e6",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export function dataBase() {
	getProductos(db);
}

async function getProductos(db) {
	const productosCol = collection(db, "productos");
	const productosSnapshot = await getDocs(productosCol);
	const productosLista = productosSnapshot.docs.map((doc) => doc.data());
	console.log(productosLista);
	return productosLista;
}
