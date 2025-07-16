import React from "react";
import "./card.scss";
export default function Cards({ title, text, link, skill }) {
	return (
		<div className="card">
			<div className="card__text-container">
				<h3 className="card__title h3">{title}</h3>
				<p className="card__text">{text}</p>
			</div>
			<div className="card__skills-container">
				{skill.map((skillItem, index) => (
					<p key={index} className="card__skill">
						{skillItem}
					</p>
				))}
			</div>
			<div className="card__btn-container">
				<a href={link} className="card__btn btn link" target="_blank">
					More on Github
				</a>
			</div>
		</div>
	);
}
