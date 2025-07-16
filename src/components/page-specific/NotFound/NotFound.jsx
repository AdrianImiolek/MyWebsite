import React from "react";
import "./notFound.scss";
export default function NotFound() {
	return (
		<main className="main not-found-main">
			<section className="not-found section">
				<h2 className="not-found__title h2">
					The page <span className="green-accent">doesn't exist!</span>{" "}
				</h2>
			</section>
		</main>
	);
}
