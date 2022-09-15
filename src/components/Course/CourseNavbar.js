import React from "react";
import styles from "./styles/CourseNavbar.module.css"
import RatingDetails from "./RatingDetails"

export default function CourseNavbar({ title }) {
    return <nav className={styles.courseNav}>
        <h3>{title}</h3>
        <RatingDetails />
    </nav>;
}
