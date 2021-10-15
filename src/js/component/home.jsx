import React from "react";
import Nav from "./navbar.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<div className="container">
				<Card />
			</div>
		</div>
	);
};

export default Home;
