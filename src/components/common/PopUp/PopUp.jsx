import React from "react";
import "./popup.scss";
export default function PopUp({ onClose }) {
	return (
		<>
			<div className="popup-shadow" onClick={onClose}></div>
			<div className="popup">
				<div className="popup__container">
					<h3 className="popup__title h3">
						Employment <span className="green-accent">history</span>
					</h3>
					<p className="popup__text">I'm currently looking for a job :)</p>
				</div>
				<button className="popup__btn btn" onClick={onClose}>
					Close
				</button>
			</div>
		</>
	);
}
