import React from "react";
import styles from "./ButtonGreen.module.css"
import { Link } from "react-router-dom";

export default function ButtonGreen({
    link,
    text,
    target,
    onClick,
    className,
    icon
}) {
    const isExternal = link.startsWith("http") || link.startsWith("mailto:");;
    if (isExternal) {
        return (
            <a
                className={`${styles.button} ${className}`}
                href={link}
                target={target}
                rel="noopener noreferrer"
                onClick={onClick}
            >
                <i className={icon}></i>
                {text}
            </a>
        );
    }

    return (
        <Link
            className={`${styles.button} ${className}`}
            to={link}
            onClick={onClick}
        >
            <i className={icon} ></i>
            {text}
        </Link>
    );
}