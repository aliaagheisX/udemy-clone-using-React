import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Layout.module.css'

export default function Error() {
    return (
        <div className={styles.Layout}>
            <img src='https://s.udemycdn.com/error_page/error-desktop-v1.jpg' alt='error' width='500' />
            <h2>We can’t find the page you’re looking for</h2>
            <Link to=''>Return Home</Link>
        </div>
    )
}
