import React from 'react'
import { Link } from "react-router-dom"

import styles from './styles/Navbar.module.css'

import Humberger from './Humberger'
import CategoriesNavBar from './CategoriesNavBar'
import SearchBar from './SearchBar'
import LinksList from './LinksList'
import ButtonsList from './ButtonsList'

export default function Navbar() {
    return (
        <nav className={styles.mainNav}>
            {/* <!-- logo --> */}
            <Link to="">
                <img alt="udemy-logo" src="/images/logo.svg" width="100px" />
            </Link>


            <Humberger />

            {/* <!-- navbar --> */}
            <div className={styles.menuContent}>
                <CategoriesNavBar />

                <SearchBar />

                <LinksList />

                <ButtonsList />
            </div>
        </nav>
    )


}



