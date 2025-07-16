import Card from "../../common/Card/Card";
export default function PortfolioMain(props) {
	const cardsContent = [
		{
			title: "Click 2 Escape",
			text: "A showcase website for a point-and-click game studio, designed to highlight their games while providing a simple and user-friendly navigation experience.",
			skill: ["HTML", "CSS", "SASS", "BEM", "JAVASCRIPT"],
			link: "https://click2escape.com/",
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
	const featuredProjects = cardsContent.slice(0, 6); // Only show 6

	return (
			<main className="main">
				<div className="projects section">
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
