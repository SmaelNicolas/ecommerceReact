import { useContext, useState } from "react";
import firebase from "firebase";

import getFirestore from "../../../../firebase/Firebase";
import { CartContext } from "../../../../context/CartContext";
import { OrderGeneratedContext } from "../../../../context/OrderGeneratedContext";

import "./Form.css";
import MessageToUser from "./MessageToUser/MessageToUser";

function Form() {
	const [inputEmail, setInputEmail] = useState(undefined);
	const [inputEmailConfirm, setInputEmailConfirm] = useState(undefined);
	const [inputName, setInputName] = useState(undefined);
	const [inputLastName, setInputLastNAme] = useState(undefined);
	const [inputPhone, setInputPhone] = useState(undefined);
	const [buttonOrder, setButtonOrder] = useState(true);
	const [buttonCheck, setButtonCheck] = useState(false);
	const [message, setMessage] = useState("FILL IN THE FORM");

	const { cart, setCart, totalPrice, quantityItems } =
		useContext(CartContext);
	const { setIsGenerated, setIdOrder } = useContext(OrderGeneratedContext);

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
				setMessage("CORRECT FORM, GENERATE ORDER");
			} else {
				setButtonOrder(true);
				setButtonCheck(false);
				document.getElementById("buttonValidate").innerHTML =
					"Validate Info";
				setMessagesToUser();
			}
		}, 2000);
	}

	function setMessagesToUser() {
		if (isNaN(parseInt(inputPhone)) === true || inputPhone !== "") {
			setMessage("INVALID PHONE NUMBER");
		}
		if (
			inputEmail === "" ||
			inputEmailConfirm === "" ||
			inputEmail !== inputEmailConfirm
		) {
			setMessage("INVALID EMAIL");
		}
		if (inputName === "" || inputLastName === "") {
			setMessage("INVALID NAME / LAST NAME");
		}
		if (quantityItems() === 0) {
			setMessage("NO PRODUCTS FOUND");
		}
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

		if (quantityItems() > 0) {
			const order = {};
			order.date = firebase.firestore.Timestamp.fromDate(new Date());
			order.buyer = {
				name: inputName,
				lastName: inputLastName,
				email: inputEmail,
				phone: inputPhone,
			};
			order.totalPrice = totalPrice();
			order.totalItems = quantityItems();
			order.items = cart;

			db.collection("orders")
				.add(order)
				.then((response) => succesfulPurchase(response))
				.finally();
		} else {
			setMessage("NO PRODUCTS FOUND");
		}
	}

	function succesfulPurchase(response) {
		setIdOrder(response.id);
		setIsGenerated(true);
		setCart([]);
	}

	return (
		<>
			<MessageToUser msj={message} />
			<form className="formulario">
				<input
					className="formularioInput"
					type="text"
					name="name"
					placeholder="Name"
					id="formName"
					required
					onChange={updateValues}
				/>
				<input
					className="formularioInput"
					type="text"
					name="name"
					placeholder="Last Name"
					id="formLastName"
					required
					onChange={updateValues}
				/>
				<input
					className="formularioInput"
					type="text"
					name="name"
					placeholder="Phone Number"
					id="formPhone"
					required
					onChange={updateValues}
				/>
				<input
					className="formularioInput"
					type="email"
					name="email"
					placeholder="Email"
					id="formEmail"
					required
					onChange={updateValues}
				/>
				<input
					className="formularioInput"
					type="email"
					name="email"
					placeholder="Confirm Email"
					id="formConfirmEmail"
					required
					onChange={updateValues}
				/>
				<button
					className="formularioButton"
					onClick={validateForm}
					id="buttonValidate"
					disabled={buttonCheck}
				>
					Validate Info
				</button>
				<button
					className="formularioButton"
					type="submit"
					id="generateOrder"
					onClick={generateOrder}
					disabled={buttonOrder}
				>
					Generate Order
				</button>
			</form>
		</>
	);
}

export default Form;
