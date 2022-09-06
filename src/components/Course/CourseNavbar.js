import React from "react";
import styles from "./styles/CourseNavbar.module.css"
export default function CourseNavbar({ ratingDetails, title }) {
    return <nav className={styles.courseNav}>
        <h3>{title}</h3>
        {ratingDetails()}
    </nav>;
}
