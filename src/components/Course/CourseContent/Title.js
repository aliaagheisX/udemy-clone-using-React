import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import styles from './styles/index.module.css'

export default function Title({ data: { content_length_text, lecture_count, title } }) {
    return (
        <Accordion.Header>
            <div className={styles.decLeft}>
                {title}
            </div>
            <div className={styles.decRight}>
                <div className={styles.sep}>{lecture_count} lectures</div>
                {content_length_text}
            </div>
        </Accordion.Header>
    )
}
