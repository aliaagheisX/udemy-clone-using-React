import React from "react";
import { Stars } from '../../../utils/RatingDescription'
import styles from './styles/User.module.css'
export default function User({
    data: {
        user: { initials, display_name },
        rating,
        created_formatted_with_time_since
    } }
) {
    return <div className={styles.cont}>
        <span className={styles.circle}>{initials}</span>
        <div>
            <span className={styles.name}>{display_name}</span>
            <div className={styles.ratingCont}>
                <Stars rating={rating} />
                <span className={styles.comment}>{created_formatted_with_time_since}</span>
            </div>
        </div>
    </div>;
}
