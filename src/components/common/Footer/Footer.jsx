import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import ButtonBorder from "../Button/ButtonBorder";
export default function Footer() {
	return (
		<footer className="footer wrapper">
			<img className="footer__img" src="/images/Zrazik.webp" />
			<ButtonBorder className="footer__link" target="_blank" link="https://github.com/AdrianImiolek" text="GitHub"/>
			<ButtonBorder className="footer__link" link="/about" text="About"/>
			<ButtonBorder className="footer__link" link="/contact" text="Contact"/>
		</footer>
	);
}
