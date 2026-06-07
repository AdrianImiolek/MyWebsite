import React from "react";
import Card from "../../common/Card/Card";
export default function PortfolioMain(props) {
	const cardsContent = [
		{
			index: 1,
			title: "Kawusia",
			img: "/images/Kawusia.webp",
			text: `KawusiaWebsite is a promotional website for a café called "Kawiarnia Kawusia". It presents the café's offer, atmosphere, and key information to potential customers in a clean and visually appealing way.`, skill: [
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
		{
			index: 4,
			title: "Click 2 Escape",
			text: "C2E Website is a simple, responsive, and mobile-friendly website built for a point-and-click game development brand. The project was created with performance, accessibility, and clean UI design in mind.",
			img: "/images/C2E.webp",
			skill: [
				{ id: 1, name: "HTML5", icon: "bxl-html5" },
				{ id: 2, name: "CSS", icon: "bxl-css3" },
				{ id: 3, name: "JavaScript", icon: "bxl-javascript" },
			],
			link: "https://github.com/AdrianImiolek/C2E-website",
		},
		{
			index: 5,
			title: "Willow & Oak",
			text: "A clean, responsive front-end website built for a nature-themed brand or business. Designed with a mobile-first approach, this project highlights HTML, CSS, and JavaScript skills for interactive, minimalist web design.",
			img: "/images/Willow&Oak.webp",
			skill: [
				{ id: 1, name: "HTML5", icon: "bxl-html5" },
				{ id: 2, name: "CSS", icon: "bxl-css3" },
				{ id: 3, name: "JavaScript", icon: "bxl-javascript" },
			],
			link: "https://github.com/AdrianImiolek/Willow-and-Oak",
		},
	]

	return (
		<main className="main">
			<div className="projects section">
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
