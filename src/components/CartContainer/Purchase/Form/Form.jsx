// import getFirestore from "../../../../firebase/Firebase";
import "./Form.css";

function Form() {
	return (
		<form className="formulario">
			<input
				type="text"
				name="name"
				placeholder="Name"
				id="formName"
				required
			/>
			<input
				type="text"
				name="name"
				placeholder="Last Name"
				id="formLastName"
				required
			/>
			<input
				type="text"
				name="name"
				placeholder="Phone Number"
				id="formPhone"
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				id="formEmail"
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Confirm Email"
				id="formConfirmEmail"
				required
			/>
			<button type="submit" disabled="true">
				Generate Order
			</button>
		</form>
	);
}

export default Form;
