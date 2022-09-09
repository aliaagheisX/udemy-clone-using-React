import React from 'react'
import styles from './styles/SearchBar.module.css'
import Searchbar from '../Searchbar';

export default function SearchBar() {

    return (
        <form id="search" className={styles.searchForm}>
            <div className={styles.searchBar}>

                <button type="submit">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>

                <Searchbar path='/' name='filter' />
            </div>
        </form>
    )
}
