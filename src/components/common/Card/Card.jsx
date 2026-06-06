import React from "react";
import "./card.scss";
import ButtonGreen from "../Button/ButtonGreen";
export default function Card({ title, text, link, skill, img }) {
	return (
		<div className="card">
			<div className="card__text-container">
				<h3 className="card__title h3">{title}</h3>
			</div>
			<div className="card__img__container">
				<img className="card__img" src={img} />
			</div>
			<div className="card__text-container">
				<p className="card__text">{text}</p>
			</div>
			<div className="card__skills-container">
				{skill.map(({ id, name, icon }) => (
					<p key={id} className="card__skill">
						<i className={`card__skill__icon bx ${icon}`}></i>
						{name}
					</p>
				))}
			</div>
			<div className="card__btn-container">
				<ButtonGreen className="card__btn btn link" target="_blank" link={link} text={"More on GitHub"} />
			</div>
		</div>
	);
}
