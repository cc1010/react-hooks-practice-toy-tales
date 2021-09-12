import React from "react";

function ToyCard({ item, addLikes, deleteToy }) {
	function handleDelete() {
		console.log("handleDelete");
		deleteToy(item.id);
	}

	function handleLikes() {
		console.log("handleLikes");
		addLikes(item);
	}
	return (
		<div className="card">
			<h2>{item.name}</h2>
			<img src={item.image} alt={item.name} className="toy-avatar" />
			<p>{item.likes} Likes </p>
			<button className="like-btn" onClick={handleLikes}>
				Like
			</button>
			<button className="del-btn" onClick={handleDelete}>
				Donate to GoodWill
			</button>
		</div>
	);
}

export default ToyCard;
