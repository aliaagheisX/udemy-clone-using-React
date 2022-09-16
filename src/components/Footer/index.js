import React from 'react'
import styles from './Footer.module.css'
import Button from '../utils/Button'
export default function Footer() {
    return (
        <footer className={styles.Footer}>

            <div className={`myContainer ${styles.linksLanguage}`}>

                <ul>
                    <li><a href="/">Udemy Business</a></li>
                    <li><a href="/">Teach on Udemy</a></li>
                    <li><a href="/">Get the app</a></li>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Contact us</a></li>
                </ul>

                <ul>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Help and Support</a></li>
                    <li><a href="/">Affilate</a></li>
                    <li><a href="/">Investors</a></li>
                </ul>

                <ul>
                    <li><a href="/">Terms</a></li>
                    <li><a href="/">Privacy policy</a></li>
                    <li><a href="/">Cookie settings</a></li>
                    <li><a href="/">Sitemap</a></li>
                    <li><a href="/">Accessibility statement</a></li>
                </ul>
                <div className={styles.languageContainer}>

                    <Button href="/" color='black'>
                        <span className="material-symbols-outlined">language</span> English

                    </Button>
                </div>
            </div>

            <div className={`myContainer ${styles.copyright}`}>

                <img src="/images/logo-udemy-inverted.svg" alt="logo" className={styles.logo} width="85" />
                <span>© 2022 Udemy, Inc.</span>
            </div>

        </footer >
    )
}
