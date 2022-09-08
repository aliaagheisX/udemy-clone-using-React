import React from 'react'
import styles from './styles/Links.module.css'
export default function Links({
    data: {
        Instructor_Rating,
        Reviews,
        Students,
        Courses
    } }) {
    return (
        <ul className={styles.links}>
            <li>
                <span className="material-symbols-outlined">star</span>
                <span>{Instructor_Rating} Instructor Rating</span>
            </li>
            <li>
                <span className="material-symbols-outlined">workspace_premium</span>
                <span>{Reviews} Reviews</span>
            </li>
            <li>
                <span className="material-symbols-outlined">group</span>
                <span>{Students} Students</span>
            </li>
            <li>
                <span className="material-symbols-outlined">play_circle</span>
                <span>{Courses} Courses</span>
            </li>
        </ul>
    )
}
