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

	const [cart, setCart, totalPrice, quantityItems] = useContext(CartContext);
	const [, setIsGenerated, , setIdOrder] = useContext(OrderGeneratedContext);

	const db = getFirestore();

	const validateForm = (e) => {
		e.preventDefault();

		document.getElementById("buttonValidate").innerHTML = "Validating ... ";

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
		inputEmail.includes("@") === true &&
		inputEmail.includes(".com") === true &&
		inputEmailConfirm !== undefined &&
		inputEmail === inputEmailConfirm
			? setTimeout(() => {
					setButtonOrder(false);
					setButtonCheck(true);
					document.getElementById("buttonValidate").innerHTML =
						"Validated";
					setMessage("CORRECT FORM, GENERATE ORDER");
			  }, 2000)
			: setTimeout(() => {
					setButtonOrder(true);
					setButtonCheck(false);
					document.getElementById("buttonValidate").innerHTML =
						"Validate Info";
					setMessagesToUser();
			  }, 2000);
	};

	const setMessagesToUser = () => {
		quantityItems() <= 0 ? (
			setMessage("NO PRODUCTS FOUND")
		) : inputName === "" || inputLastName === "" ? (
			setMessage("INVALID NAME / LAST NAME")
		) : inputEmail === "" ||
		  inputEmailConfirm === "" ||
		  inputEmail !== inputEmailConfirm ||
		  inputEmail.includes("@") === false ||
		  inputEmail.includes(".com") === false ? (
			setMessage("INVALID EMAIL")
		) : isNaN(parseInt(inputPhone)) === true || inputPhone !== "" ? (
			setMessage("INVALID PHONE NUMBER")
		) : (
			<></>
		);
	};

	const updateValues = () => {
		setInputEmail(document.getElementById("formEmail").value);
		setInputEmailConfirm(document.getElementById("formConfirmEmail").value);
		setInputName(document.getElementById("formName").value);
		setInputLastNAme(document.getElementById("formLastName").value);
		setInputPhone(document.getElementById("formPhone").value);
		setButtonOrder(document.getElementById("generateOrder").disabled);
		setButtonOrder(true);
		setButtonCheck(false);
		document.getElementById("buttonValidate").innerHTML = "Validate Info";
	};

	const generateOrder = (e) => {
		e.preventDefault();

		if (quantityItems() > 0) {
			const order = {
				date: firebase.firestore.Timestamp.fromDate(new Date()),
				buyer: {
					name: inputName,
					lastName: inputLastName,
					email: inputEmail,
					phone: inputPhone,
				},
				totalPrice: totalPrice(),
				totalItems: quantityItems(),
				items: cart.map((item) => {
					return {
						id: item.id,
						title: item.title,
						img: item.img,
						quantity: item.quantity,
						price: item.price * item.quantity,
					};
				}),
			};

			db.collection("orders")
				.add(order)
				.then((response) => succesfulPurchase(response))
				.finally();
		} else {
			setMessage("NO PRODUCTS FOUND");
		}
	};

	const succesfulPurchase = (response) => {
		setIdOrder(response.id);
		setIsGenerated(true);
		updateStockProducts(cart);
		setCart([]);
	};

	const updateStockProducts = (cart) => {
		const prodsInCartToUpdate = db.collection("productos").where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			cart.map((i) => i.id)
		);

		const batch = db.batch();

		prodsInCartToUpdate.get().then((col) => {
			col.docs.forEach((idList) => {
				batch.update(idList.ref, {
					stock:
						idList.data().stock -
						cart.find((prod) => prod.id === idList.id).quantity,
				});
			});
			batch.commit();
		});
	};

	return (
		<>
			<MessageToUser msj={message} />
			<form className='formulario' typeof='submit'>
				<input
					className='formularioInput'
					type='text'
					name='name'
					placeholder='Name'
					id='formName'
					required
					onChange={updateValues}
				/>
				<input
					className='formularioInput'
					type='text'
					name='name'
					placeholder='Last Name'
					id='formLastName'
					required
					onChange={updateValues}
				/>
				<input
					className='formularioInput'
					type='text'
					name='name'
					placeholder='Phone Number'
					id='formPhone'
					required
					onChange={updateValues}
				/>
				<input
					className='formularioInput'
					type='email'
					name='email'
					placeholder='Email'
					id='formEmail'
					required
					onChange={updateValues}
				/>
				<input
					className='formularioInput'
					type='email'
					name='email'
					placeholder='Confirm Email'
					id='formConfirmEmail'
					required
					onChange={updateValues}
				/>
				<button
					className='formularioButton'
					onClick={validateForm}
					id='buttonValidate'
					disabled={buttonCheck}
				>
					Validate Info
				</button>
				<button
					className='formularioButton'
					type='submit'
					id='generateOrder'
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
