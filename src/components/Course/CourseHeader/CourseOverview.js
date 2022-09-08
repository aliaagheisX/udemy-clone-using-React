import React, { useContext } from 'react'
import styles from './styles/CourseDetails.module.css'
import { SummaryContext } from '..'
import { RatingDetails } from '..';
import Instructors from './Instructors';
import Updates from './Updates'

export default function CourseOverview() {
    const {
        title,
        headline,
    } = useContext(SummaryContext);

    return (
        <div className={styles.head}>
            <h1> {title} </h1>
            <p>{headline}</p>

            <div className={styles.details}>
                <RatingDetails />

                <Instructors />

                <Updates />
            </div>
        </div>
    );
}
