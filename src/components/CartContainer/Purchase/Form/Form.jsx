import { useContext, useState } from "react";
import firebase from "firebase";
import "firebase/firestore";

import getFirestore from "../../../../firebase/Firebase";
import { CartContext } from "../../../../context/CartContext";

import "./Form.css";

function Form() {
	const [inputEmail, setInputEmail] = useState(undefined);
	const [inputEmailConfirm, setInputEmailConfirm] = useState(undefined);
	const [inputName, setInputName] = useState(undefined);
	const [inputLastName, setInputLastNAme] = useState(undefined);
	const [inputPhone, setInputPhone] = useState(undefined);
	const [buttonOrder, setButtonOrder] = useState(true);
	const [buttonCheck, setButtonCheck] = useState(false);

	const { cart, totalPrice, quantityItems } = useContext(CartContext);
	const [idOrder, setIdOrder] = useState("");
	const db = getFirestore();

	function validateForm(e) {
		e.preventDefault();
		document.getElementById("buttonValidate").innerHTML = "Validating ... ";
		setTimeout(() => {
			if (
				quantityItems() > 0 &&
				inputName !== "" &&
				inputLastName !== "" &&
				inputPhone !== "" &&
				isNaN(parseInt(inputPhone)) === false &&
				inputEmail !== "" &&
				inputEmailConfirm !== "" &&
				inputName !== undefined &&
				inputLastName !== undefined &&
				inputPhone !== undefined &&
				inputEmail !== undefined &&
				inputEmailConfirm !== undefined &&
				inputEmail === inputEmailConfirm
			) {
				setButtonOrder(false);
				setButtonCheck(true);
				document.getElementById("buttonValidate").innerHTML =
					"Validated";
			} else {
				setButtonOrder(true);
				setButtonCheck(false);
				document.getElementById("buttonValidate").innerHTML =
					"Validate Info";
			}
		}, 2000);
	}

	function updateValues() {
		setInputEmail(document.getElementById("formEmail").value);
		setInputEmailConfirm(document.getElementById("formConfirmEmail").value);
		setInputName(document.getElementById("formName").value);
		setInputLastNAme(document.getElementById("formLastName").value);
		setInputPhone(document.getElementById("formPhone").value);
		setButtonOrder(document.getElementById("generateOrder").disabled);
		setButtonOrder(true);
		setButtonCheck(false);
		document.getElementById("buttonValidate").innerHTML = "Validate Info";
	}

	function generateOrder(e) {
		e.preventDefault();

		const order = {};
		order.date = firebase.firestore.Timestamp.fromDate(new Date());
		order.buyer = {
			name: inputName,
			lastName: inputLastName,
			email: inputEmail,
			phone: inputPhone,
		};
		order.total = totalPrice();
		order.items = cart;

		setTimeout(() => {
			console.log(order);
			db.collection("orders")
				.add(order)
				.then((response) => setIdOrder(response.id))
				.finally();
		}, 1500);
	}

	return (
		<form className="formulario">
			<input
				type="text"
				name="name"
				placeholder="Name"
				id="formName"
				required
				onChange={updateValues}
			/>
			<input
				type="text"
				name="name"
				placeholder="Last Name"
				id="formLastName"
				required
				onChange={updateValues}
			/>
			<input
				type="text"
				name="name"
				placeholder="Phone Number"
				id="formPhone"
				required
				onChange={updateValues}
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				id="formEmail"
				required
				onChange={updateValues}
			/>
			<input
				type="email"
				name="email"
				placeholder="Confirm Email"
				id="formConfirmEmail"
				required
				onChange={updateValues}
			/>
			<button
				onClick={validateForm}
				id="buttonValidate"
				disabled={buttonCheck}
			>
				Validate Info
			</button>
			<button
				type="submit"
				id="generateOrder"
				onClick={generateOrder}
				disabled={buttonOrder}
			>
				Generate Order
			</button>
		</form>
	);
}

export default Form;
