import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
	apiKey: "AIzaSyAz2vdnMvNy_yKIkHf3FZHNET3p16PfjHs",
	authDomain: "drag-on-6a228.firebaseapp.com",
	projectId: "drag-on-6a228",
	storageBucket: "drag-on-6a228.appspot.com",
	messagingSenderId: "211552814355",
	appId: "1:211552814355:web:cb99d759cbaf4201d886e6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
	console.log(db);
}

getCities();
