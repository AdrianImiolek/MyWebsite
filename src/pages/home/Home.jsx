import React from "react";
import "./home.scss";
import HomeMain from "../../components/page-specific/HomeMain/HomeMain.jsx";
export default function Home() {
	return (
		<>
			<header className="header section">
				<div className="header__text-content">
					<h2 className="header__title title h2">
						Frontend <span className="green-accent">developer</span>
					</h2>
					<p className="header__text">
						Hey there! I’m Adrian <br /> Welcome to my world where creativity
						meets the functionality to deliver well-polished products.
					</p>
				</div>
				<div className="header__hero-container">
					<img
						className="header__hero-img"
						src="images/hero.jpg"
						alt="Picture depicting me and my cat Zrazik in studio Ghibli style."
					/>
				</div>
				<div className="header__cta-container">
					<button
						className="header__cta-btn heartbeat"
						onClick={() => {
							window.location.hash = "#projects";
						}}>
						<p className="header__cta-text header__cta-text--first">
							Shall we start?
						</p>
						<p className="header__cta-text header__cta-text--second">Yes!</p>
					</button>
				</div>
			</header>
			<HomeMain />
		</>
	);
}
