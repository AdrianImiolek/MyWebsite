import React from "react";
import Card from "../../common/Card/Card";
export default function Main(props) {
	const cardsContent = [
		{
			title: "Click 2 Escape",
			text: "A showcase website for a point-and-click game studio, designed to highlight their games while providing a simple and user-friendly navigation experience.",
			skill: ["HTML", "CSS", "SASS", "BEM", "JAVASCRIPT"],
			link: "https://github.com/AdrianImiolek/C2E-website",
		},
		{
			title: "Willow & Oak",
			text: "A modern, nature-inspired website for a fictional brand focused on clean design, responsive layout, and interactive elements to enhance the user experience.",
			skill: ["HTML", "CSS", "SASS", "BEM", "JAVASCRIPT"],
			link: "https://github.com/AdrianImiolek/Willow-and-Oak",
		},
		{
			title: "Flowerist",
			text: "A relaxing browser game where players grow and manage flowers to generate resources, featuring ambient music, soft visuals, and simple progression mechanics.",
			skill: ["HTML", "CSS", "SASS", "BEM", "JAVASCRIPT"],
			link: "https://github.com/AdrianImiolek/Flowerist",
		},
	];
	const featuredProjects = cardsContent.slice(0, 3); // Only show 3

	return (
		<main className="main">
			<div className="projects section" id="projects">
				<h2 className="projects__title h2">
					My <span className="green-accent">projects</span>
				</h2>
				<div className="projects__cards">
					{featuredProjects.map((card, index) => (
						<Card
							key={index} //React needs this to track each component efficiently
							title={card.title}
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
