import React from "react";
import Card from "../../common/Card/Card";


export default function Main(props) {



	const cardsContent = [
		{
			index: 1,
			title: "Kawusia",
			img: "/images/Kawusia.webp",
			text: `Kawusia is a promotional website for a café called "Kawiarnia Kawusia". It presents the café's offer, atmosphere, and key information to potential customers in a clean and visually appealing way.`,
			skill: [
				{ id: 1, name: "React", icon: "bxl-react" },
				{ id: 2, name: "Tailwind", icon: "bxl-tailwind-css" },
				{ id: 3, name: "JavaScript", icon: "bxl-javascript" },
			],
			link: "https://github.com/AdrianImiolek/KawusiaWebsite",
		},
		{
			index: 2,
			title: "Plant Database",
			text: "Plant Search is a fullstack web application that allows users to search for plants and browse detailed information about them. The frontend communicates with a custom backend, which handles API requests to an external plant data source, keeping sensitive credentials secure on the server side.",
			img: "/images/PlantDatabase.webp",
			skill: [
				{ id: 1, name: "React", icon: "bxl-react" },
				{ id: 2, name: "Tailwind", icon: "bxl-tailwind-css" },
				{ id: 3, name: "JavaScript", icon: "bxl-javascript" },
				{ id: 4, name: "Node.js", icon: "bxl-nodejs" },
			],
			link: "https://github.com/AdrianImiolek/Plant-Search",
		},

		{
			index: 3,
			title: "Springfield",
			text: "Springfield is a SaaS-style landing page concept for a project management tool aimed at creative teams. Built with React and client-side routing, it showcases modern UI design and multi-page navigation structure - demonstrating frontend architecture skills in a real-world product context.",
			img: "/images/Springfield.webp",
			skill: [
				{ id: 1, name: "React", icon: "bxl-react" },
				{ id: 2, name: "Tailwind", icon: "bxl-tailwind-css" },
				{ id: 3, name: "JavaScript", icon: "bxl-javascript" },
			],
			link: "https://github.com/AdrianImiolek/springfield",
		},
	];


	return (
		<main className="main">
			<div className="projects section" id="projects">
				<h2 className="projects__title h2">
					My <span className="green-accent">projects</span>
				</h2>
				<div className="projects__cards">
					{cardsContent.map((card, index) => (
						<Card
							key={card.index} //React needs this to track each component efficiently
							title={card.title}
							img={card.img}
							text={card.text}
							skill={card.skill}
							link={card.link}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
//Map method goes through each item in my cardsContent
//For each item it calls function I provide passing the current item as parameter and index of this item as second
//React uses key to track which components correspong to which pieces of data, react can track changes
//in exactly changed component instead of rerendering everything
