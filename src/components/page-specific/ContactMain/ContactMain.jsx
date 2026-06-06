import React, { useState } from "react";
import "./contactMain.scss";
import ButtonGreen from "../../common/Button/ButtonGreen"
export default function ContactMain() {

	const [isClicked, setIsClicked] = useState(false);

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
		setIsClicked(!isClicked)
		setTimeout(() => {
			setIsClicked(false)
		}, 2000)
	}

	return (
		<>
			<main className="main">
				<section className="contact section">
					<h2 className="contact__title h2">
						Choose <span className="green-accent">your</span> way to contact{" "}
						<span className="green-accent">us</span>:
					</h2>
					<div className="contact__content">
						<div className="contact__content__links">
							<ButtonGreen className="contact__content__link" link={"mailto:contact@adek.dev"} icon={"bx bx-envelope"} text={"Message us"} />
							<ButtonGreen className="contact__content__link" link={"https://www.linkedin.com/in/adrian-imiolek/"} icon={"bx bxl-linkedin-square"} text={"Linkedin"} target={"_blank"} />
							<ButtonGreen className="contact__content__link" link="" text={isClicked ? "Copied to clipboard!" : "Copy email: contact@adek.dev"} onClick={() => copyToClipboard("contact@adek.dev")} />
						</div>
						<div className="img__container">
							<img className="contact__image" src="/images/AdrianAndZrazik.webp" alt="Adrian holding Zrazik" />
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
