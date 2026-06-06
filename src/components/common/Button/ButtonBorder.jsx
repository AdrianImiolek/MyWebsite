import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./ButtonBorder.module.css"

export default function ButtonBorder({ link, text, target, className }) {
    return (
        <Link className={`${styles.button} ${className}`} to={link} target={target} rel="noopener noreferrer">
            {text}
        </Link>
    )
}