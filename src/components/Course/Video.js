import React, { useContext } from 'react'
import { SummaryContext } from '.'
import styles from './styles/Video.module.css'

export default function Video() {
    const { image_750x422: image } = useContext(SummaryContext);
    return (

        <a className={styles.video} href='/'>
            <img src={image} alt="course" />
            <span className={styles.preview}>Preview this course</span>
            <span className={`material-symbols-outlined ${styles.circle}`}>
                play_circle
            </span>
        </a>
    )
}
