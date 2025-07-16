import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
			<footer className="footer">
				<a className="footer__link link" href="https://github.com/AdrianImiolek" target="_blank" >GitHub</a>
				<Link className="footer__link link" to="/about">About</Link>
				<Link className="footer__link link" to="/contact">Contact</Link>
			</footer>
	);
}
