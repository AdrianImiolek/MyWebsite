import React from "react";
import "boxicons";
import styles from "./fallingLeaves.module.css";
export default function FallingLeaves() {
	return (
		<div className={styles.fallingAnimation}>
			<div>
				<i className={`${styles.leaf} ${styles.leaf__1} bx bx-leaf`} name="leaf"></i>
			</div>
			<div>
				<i className={`${styles.leaf} ${styles.leaf__2} bx bx-leaf`} name="leaf"></i>
			</div>

			<div>
				<i className={`${styles.leaf} ${styles.leaf__3} bx bxs-leaf`} name="leaf"></i>
			</div>

			<div>
				<i className={`${styles.leaf} ${styles.leaf__4} bx bxs-leaf`} name="leaf"></i>
			</div>
		</div>
	);
}
