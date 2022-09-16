import React, { useContext } from 'react'
import { SummaryContext } from '..'
import styles from './styles/Instructors.module.css'

export default function Instructors() {
    const { visible_instructors: instructors } = useContext(SummaryContext);
    return <span className={styles.instructors}>
        Created by {instructors.map((i, index) => (
            <a key={i.id} href={`#instructor-${index}`}>
                {i.display_name}
                {index !== instructors.length - 1 ? ',' : ''}
            </a>
        ))}
    </span>;
}
