// Import CSS styles
import { transform } from "framer-motion";
import "./nav.scss";

// Import React and useState hook
import React, { useState } from "react";

// Import the Link component from react-router-dom to create navigation links
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
	//State to track if mobile menu is open or closed
	//isMenuOpen starts as false (menu closed by default)
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	//Function to toggle menu open/closed state
	const toggleMenu = () => {
		// Set state to opposite of current state
		setIsMenuOpen(!isMenuOpen); //! it flips the current state
	};

	//Function to close menu when link is clicked
	const closeMenu = () => {
		//Set menu state to closed
		setIsMenuOpen(false);
	};

	const [isDark, setIsDark] = useState(false);

	const toggleTheme = (e) => {
		const icon = e.target
		icon.animate(
			[
				{ transform: "rotate(0)" },
				{ transform: "rotate(45deg)" },
				{ transform: "rotate(-25deg)" },
			],
			{
				duration: 300,
			}
		)
		setTimeout(() => {
			setIsDark(!isDark);
			document.documentElement.classList.toggle("dark");
		}, 301)
	};

	return (
		<>
			<nav className="nav navMobile ">
				<div className="nav__logo">
					<Link className="nav__logo-link link" to="/">
						<h1 className="nav__title h1">
							adek.<span className="green-accent">dev</span>
						</h1>
					</Link>
					<button
						className="nav__theme-toggle"
						aria-label="Toggle dark/light mode"
						onClick={toggleTheme}>
						<i className={`nav__theme-icon bx ${isDark ? "bxs-sun" : "bxs-moon"}`}></i>
					</button>
				</div>

				<button
					className="nav__toggle"
					type="button"
					aria-label="Toggle menu navigation"
					aria-expanded={isMenuOpen}
					onClick={toggleMenu}>
					{/*Hamburger icon - add 'active' class when menu is open  */}
					<i
						className={`bx bx-menu hamburger ${isMenuOpen ? "hamburger--active" : ""
							}`}
						name="menu"></i>
				</button>

				<div
					className={`nav__links-shadow ${isMenuOpen ? "nav__links-shadow--active" : ""
						} `}
					onClick={closeMenu}></div>
				{/* Add 'nav__links--open' class when menu is open */}
				<div className={`nav__links ${isMenuOpen ? "nav__links--open" : ""}`}>
					<Link className="nav__link link" to="/about" onClick={closeMenu}>
						About
					</Link>
					<Link className="nav__link link" to="/portfolio" onClick={closeMenu}>
						Portfolio
					</Link>
					<Link className="nav__link link" to="/contact" onClick={closeMenu}>
						Contact
					</Link>
				</div>
			</nav>

			<nav className="nav navDesktop">
				<div className="nav__logo">
					<Link className="nav__logo-link link" to="/">
						<p className="nav__title">
							adek.<span className="green-accent">dev</span>
						</p>
					</Link>
					<button
						className="nav__theme-toggle"
						aria-label="Toggle dark/light mode"
						onClick={toggleTheme}>
						<i className={`nav__theme-icon bx ${isDark ? "bxs-sun" : "bxs-moon"}`}></i>
					</button>
				</div>
				<div className="nav__desktop-links">
					<NavLink className="nav__link link" to="/about">
						About
					</NavLink>
					<NavLink className="nav__link link" to="/portfolio">
						Portfolio
					</NavLink>
					<NavLink className="nav__link link" to="/contact">
						Contact
					</NavLink>
				</div>
			</nav>
		</>
	);
}
