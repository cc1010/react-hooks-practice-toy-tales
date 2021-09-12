import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
	const [showForm, setShowForm] = useState(false);
	const [list, setList] = useState([]);
	const [updateState, setUpdateState] = useState(true);
	const URL = "http://localhost:3001/toys";
	function handleClick() {
		setShowForm((showForm) => !showForm);
	}

	// GET
	useEffect(() => {
		fetch(URL)
			.then((resp) => resp.json())
			.then((data) => setList(data));
	}, [updateState]);
	// POST
	function addToy(item) {
		fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(item),
		})
			.then((resp) => resp.json())
			.then(setUpdateState(!updateState));
	}

	// PATCH
	function addLikes(item) {
		const newLikes = item.likes + 1;
		fetch(`${URL}/${item.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ likes: newLikes }),
		}).then(setUpdateState(!updateState));
	}
	// DELETE
	function deleteToy(id) {
		fetch(`${URL}/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		}).then(setUpdateState(!updateState));
	}
	return (
		<>
			<Header />
			{showForm ? <ToyForm addToy={addToy} /> : null}
			<div className="buttonContainer">
				<button onClick={handleClick}>Add a Toy</button>
			</div>
			<ToyContainer
				list={list}
				addLikes={addLikes}
				deleteToy={deleteToy}
			/>
		</>
	);
}

export default App;
