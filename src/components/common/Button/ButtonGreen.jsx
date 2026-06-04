import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./ButtonGreen.module.css"

export default function ButtonGreen({link,text}) {
    return (
        <Link className={styles.button} to={link}>
            {text}
        </Link>
    )
}