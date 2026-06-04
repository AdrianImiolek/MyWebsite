import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./ButtonBorder.module.css"

export default function ButtonBorder({link,text}) {
    return (
        <Link className={styles.button} to={link}>
            {text}
        </Link>
    )
}