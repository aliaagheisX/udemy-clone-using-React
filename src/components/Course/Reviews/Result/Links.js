import React from 'react'
import styles from './styles/index.module.css'

export default function Links() {
    return (
        <ul>
            <li className={styles.thumb}><a href='/'>
                <span className="material-symbols-outlined">thumb_up</span>
            </a></li>
            <li className={styles.thumb}><a href='/'>
                <span className="material-symbols-outlined">thumb_down</span>
            </a></li>
            <li><a href='/'>Report</a></li>
        </ul>
    )
}
