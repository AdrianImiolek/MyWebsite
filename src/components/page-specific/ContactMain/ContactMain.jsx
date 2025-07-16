import "./contactMain.scss";
export default function ContactMain() {
	return (
		<>
			<main className="main">
				<section className="contact section">
					<h2 className="contact__title h2">
						Choose <span className="green-accent">your</span> way to contact{" "}
						<span className="green-accent">us</span>:
					</h2>
					<div className="contact__links ">
						<a className="contact__link link" href="mailto:contact@adek.dev">
							<i class="bx bxs-envelope"></i> email
						</a>
						<img
							className="img img-section__img"
							src="/images/contact.png"
							alt="Picture depicting me and my cat Zrazik in studio Ghibli style."
						/>
						<a
							className="contact__link link"
							target="_blank"
							href="https://www.linkedin.com/in/adrian-imio%C5%82ek-a740a6375/">
							<i class="bx bxl-linkedin-square"></i> linkedin
						</a>
					</div>
				</section>
			</main>
		</>
	);
}
