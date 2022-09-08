import React from 'react'
import styles from './styles/Card.module.css'

export function CardContent({ children }) {
    return (
        <div className={`${styles.cardContent} shadow`}>
            {children}
        </div >
    )
}

export function HoverCard({ title, type, children }) {
    return (
        <li className={`${styles.hoverCard} ${styles[type]}`}>
            {title}
            <div className={styles.cardHoverContainer}>
                <CardContent>{children}</CardContent>
            </div>
        </li>
    )
}
