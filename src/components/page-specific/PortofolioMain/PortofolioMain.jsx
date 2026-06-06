import React from "react";
import Card from "../../common/Card/Card";
export default function PortfolioMain(props) {
	const cardsContent = [
		{
			index: 1,
			title: "Kawusia",
			img: "/images/Kawusia.webp",
			text: "A showcase website for a point-and-click game studio, designed to highlight their games while providing a simple and user-friendly navigation experience.",
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
			text: "A modern, nature-inspired website for a fictional brand focused on clean design, responsive layout, and interactive elements to enhance the user experience.",
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
			text: "A relaxing browser game where players grow and manage flowers to generate resources, featuring ambient music, soft visuals, and simple progression mechanics.",
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
			text: "A relaxing browser game where players grow and manage flowers to generate resources, featuring ambient music, soft visuals, and simple progression mechanics.",
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
			text: "A relaxing browser game where players grow and manage flowers to generate resources, featuring ambient music, soft visuals, and simple progression mechanics.",
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
