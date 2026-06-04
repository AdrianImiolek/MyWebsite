import React from "react";
import "./home.scss";
import HomeMain from "../../components/page-specific/HomeMain/HomeMain.jsx";
import ButtonGreen from "../../components/common/Button/ButtonGreen.jsx";
import ButtonBorder from "../../components/common/Button/ButtonBorder.jsx";
export default function Home() {
	return (
		<>
			<header className="header section">
				<div className="header__text-content">

				<p className="header__text header__text--opportunities"> <span className="circle"></span><i class="bx bx-briefcase-alt-2"/> Open for opportunities </p>
	
					<h1 className="header__title title h1">
						Adrian Imiołek - Frontend <span className="green-accent">developer</span>
					</h1>
					<p className="header__text">
						Hey there! I’m Adrian and welcome to my world where creativity
						meets the functionality to deliver well-polished products.
					</p>

					<p className="header__text">
						When I'm not pushing pixels, I'm probably being supervised by Zrazik, my cat and unofficial code reviewer.
					</p>

					
					<div className="header__ctas">
					<ButtonGreen className="header__cta" link={"/portfolio"} text={"See more projects"}/>
					<ButtonBorder className="header__Cta" link={"/contact"} text={"Contact us"} />
					</div>

				</div>
				<div className="header__hero-container">
					<img
						className="header__hero-img"
						src="images/AdrianImiolek.webp"
						alt="Picture depicting me and my cat Zrazik in studio Ghibli style."
					/>
				</div>
			</header>
			<HomeMain />
		</>
	);
}
