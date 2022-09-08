import React from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './styles/Form.module.css'
export default function Form() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <form className={styles.form}>
            <input
                placeholder='Search reviews'
                type='search'
                name='search'
                value={searchParams.get("review") || ""}
                onChange={(e) => {
                    let rating = e.target.value;
                    if (rating) setSearchParams({ rating });
                    else setSearchParams({});
                }}
                className={styles.searchBar}
            />
            <select
                value={searchParams.get("rating") || ""}
                onChange={(e) => {
                    let rating = e.target.value;
                    if (rating) setSearchParams({ rating });
                    else setSearchParams({});
                }}
                className={styles.select}

            >
                <option value="0">All Ratings</option>
                <option value="5">Five stars</option>
                <option value="4">Four stars</option>
                <option value="3">Three stars</option>
                <option value="2">Two stars</option>
                <option value="1">One stars</option>
            </select>
        </form>
    )
}
