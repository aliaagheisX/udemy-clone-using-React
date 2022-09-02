import React from 'react'
import styles from './Button.module.css'
export default function Button({ href, size = "normal", color = "white", children }) {
    return (
        <a
            className={`${styles.btn} ${styles[size]} ${styles[color]}`}
            href={href}
        >
            {children}
        </a>
    )
}
