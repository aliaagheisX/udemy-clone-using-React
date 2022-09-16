import React from 'react'
import { CardContent } from '../utils/Card';
import styles from './styles/Header.module.css'

export default function Header() {
    return (
        <header >
            <div className={`myContainer ${styles.headerContainer}`}>
                <CardContent>
                    <h1>New to Udemy? Lucky you.</h1>
                    <p>Courses start at E£169.99. Get your new student offer before it expires.</p>
                </CardContent>
                <img className={styles.headerImg} src="/images/alarms.png" alt="alarm" />

            </div>
        </header>
    );
}
