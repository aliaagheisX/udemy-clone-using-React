import React from 'react'
import styles from './styles/Button.module.css'
import { Link } from 'react-router-dom'
export default function Button({ href, size = "normal", color = "white", children }) {
    return (
        <Link
            className={`${styles.btn} ${styles[size]} ${styles[color]}`}
            to={href}
        >
            {children}
        </Link>
    )
}
