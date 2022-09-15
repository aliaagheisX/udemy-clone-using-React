import React from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './index.module.css'
import Searchbar from '../../Searchbar'
import useNavigateSearch from '../../../useNavigateSearch';
export default function Form() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigateSearch();
    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

            <Searchbar name='review' />

            <select
                value={searchParams.get("rating") || ""}
                onChange={(e) => {
                    const value = e.target.value;
                    navigate({ key: 'rating', value: value });
                }}
                className={styles.select}
            >

                <option value="">All Ratings</option>
                <option value="5">Five stars</option>
                <option value="4">Four stars</option>
                <option value="3">Three stars</option>
                <option value="2">Two stars</option>
                <option value="1">One stars</option>
            </select>

        </form>
    )
}
