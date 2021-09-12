import React, { useState } from "react";

function ToyForm({ addToy }) {
	const [formData, setFormData] = useState({ name: "", image: "" });
	function handleForm(e) {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	}
	console.log(formData);
	function handleSubmit(e) {
		e.preventDefault();
		addToy(formData);
	}
	return (
		<div className="container">
			<form className="add-toy-form">
				<h3>Create a toy!</h3>
				<input
					type="text"
					name="name"
					placeholder="Enter a toy's name..."
					className="input-text"
					value={formData.name}
					onChange={handleForm}
				/>
				<br />
				<input
					type="text"
					name="image"
					placeholder="Enter a toy's image URL..."
					className="input-text"
					value={formData.image}
					onChange={handleForm}
				/>
				<br />
				<input
					type="submit"
					name="submit"
					value="Create New Toy"
					className="submit"
					onClick={handleSubmit}
				/>
			</form>
		</div>
	);
}

export default ToyForm;
