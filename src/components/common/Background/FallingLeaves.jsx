import "boxicons";
import styles from "./fallingLeaves.module.css";
export default function FallingLeaves() {
	return (
		<div className={styles.fallingAnimation}>
			<i className={`${styles.leaf} bx bx-leaf`} name="leaf"></i>
			<i className={`${styles.leaf} bx bx-leaf`} name="leaf"></i>
			<i className={`${styles.leaf} bx bxs-leaf`} name="leaf"></i>
			<i className={`${styles.leaf} bx bxs-leaf`} name="leaf"></i>
		</div>
	);
}
