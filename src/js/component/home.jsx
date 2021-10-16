import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Card />
			</div>
		</div>
	);
};

export default Home;
