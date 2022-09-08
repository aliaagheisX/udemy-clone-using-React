import React from 'react'
import styles from './styles/Humberger.module.css'
export default function Humberger() {
    return (
        <>
            <input type="checkbox" id="checkbox_toggle" className={styles.hamburgerCheckbox} />
            <label
                htmlFor="checkbox_toggle"
                className={`material-symbols-outlined ${styles.hamburger}`}
            >
                menu
            </label>
        </>
    )
}
