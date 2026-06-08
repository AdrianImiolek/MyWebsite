import "./aboutMain.scss";
import PopUp from "../../common/PopUp/PopUp.jsx";
import React, { useState } from "react";

export default function AboutMain() {
	const [isPopUpOpen, setIsPopUpOpen] = useState(false);

	const togglePopUp = () => {
		if (!isPopUpOpen) {
			// Opening popup - disable scrolling
			// document.body.style.overflowY = "hidden";
			setIsPopUpOpen(true);
		} else {

			// document.body.style.overflowY = "auto";
			setIsPopUpOpen(false);
		}
	};

	const skills = [
		{ id: 1, text: "English" },
		{ id: 2, text: "HTML" },
		{ id: 3, text: "CSS" },
		{ id: 4, text: "JavaScript" },
		{ id: 5, text: "RWD" },
		{ id: 6, text: "React" },
		{ id: 8, text: "Tailwind" },
		{ id: 7, text: "Node.js" },

	]

	return (
		<main className="main">
			<section className="about section">
				<h2 className="about__title h2">
					About <span className="green-accent">me</span>
				</h2>
				<div className="about__content">
					<div className="about__card">
						<h3 className="about__title h3">
							My <span className="green-accent">skills</span>
						</h3>
						<div className="about__skills">
							{skills.map(({ id, text }) => (
								<p key={id} className="about__skill">{text}</p>
							))}
						</div>
					</div>
					<div className="about__card">
						<h3 className="about__title h3">
							My <span className="green-accent">story</span>
						</h3>
						<p className="about__txt">Hi! My name is Adrian.</p>
						<p className="about__txt">
							I'm a self-taught frontend developer who discovered my passion for
							web development through curiosity and hands-on experimentation.
							What started as tinkering with code has evolved into a dedicated
							pursuit of creating websites that are not only visually appealing
							but also accessible and user-friendly.
						</p>
						<p className="about__txt">
							I believe in learning through building - from developing interactive apps
							like my Plant Search website that deepened my understanding of fullstack development, to creating business websites like
							Willow & Oak that showcase minimalistic design principles. Whether
							it's helping friends bring their creative visions to life or
							crafting engaging web experiences, I'm driven by the challenge of
							turning ideas into polished, functional websites.
						</p>
						<p className="about__txt">
							My goal is to contribute to meaningful projects where thoughtful
							design meets solid technical implementation, always keeping the
							end user at the center of every decision.
						</p>
						<p className="about__txt">
							Fun fact: My coding setup includes a four-legged supervisor named
							Zrazik who ensures I take proper breaks and maintains strict
							quality control over my keyboard usage.
						</p>
					</div>
					<div className="about__card about__card--employment">
						<h3 className="about__title h3">
							Past <span className="green-accent">career</span>
						</h3>
						<button className="about__btn btn" onClick={togglePopUp}>
							Employment history
						</button>
					</div>
				</div>
				{/* CONDITIONAL RENDERING: Only render PopUp component if isPopUpOpen is true */}
				{/* This is JavaScript logical AND operator - if left side is true, render right side */}
				<PopUp isOpen={isPopUpOpen} onClose={togglePopUp} />
			</section>
		</main>
	);
}
