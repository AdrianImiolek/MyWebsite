import "./aboutMain.scss";
import PopUp from "../../common/PopUp/PopUp.jsx";
import React, { useState } from "react";

export default function AboutMain() {
	const [isPopUpOpen, setIsPopUpOpen] = useState(false);

	const togglePopUp = () => {
		setIsPopUpOpen(!isPopUpOpen);
	};
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
							<p className="about__skill">HTML5</p>
							<p className="about__skill">CSS3</p>
							<p className="about__skill">JavaScript</p>
							<p className="about__skill">BEM</p>
							<p className="about__skill">English</p>
							<p className="about__skill">React</p>
							<p className="about__skill">RWD</p>
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
							I believe in learning through building - from developing
							interactive games like my incremental flower game that deepened my
							JavaScript understanding, to creating business websites like
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
							Fun fact: My coding setup includes a four-legged supervisor named Zrazik who ensures I take proper breaks and maintains strict quality control over my keyboard usage.
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
				{isPopUpOpen && <PopUp onClose={togglePopUp} />}
			</section>
		</main>
	);
}
