import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ list, addLikes, deleteToy }) {
	return (
		<div id="toy-collection">
			{/* Render the collection of ToyCards */}
			{list.map((item) => (
				<ToyCard
					key={item.id}
					item={item}
					addLikes={addLikes}
					deleteToy={deleteToy}
				/>
			))}
		</div>
	);
}

export default ToyContainer;
