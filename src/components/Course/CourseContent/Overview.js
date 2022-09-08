import React, { useContext } from 'react'
import { DetailsContext } from '..';
import styles from './styles/index.module.css'
export default function Overview() {
    const {
        curriculum_context: {
            data: {
                sections,
                num_of_published_lectures,
                estimated_content_length_text
            }
        }
    } = useContext(DetailsContext)
    const [hours, mins] = estimated_content_length_text.split(':').map((e) => parseInt(e).toLocaleString())

    return (
        <div className={styles.container}>
            <ul className={styles.description}>
                <li className={styles.sep}>{sections.length} sections </li>
                <li className={styles.sep}>{num_of_published_lectures} lectures</li>
                <li>{hours}hr {mins}m total length </li>
            </ul>
            <button className={styles.btn}>Expand All Sections</button>
        </div>
    )
}
