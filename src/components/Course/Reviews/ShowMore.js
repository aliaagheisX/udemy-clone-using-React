import React from 'react'
import styles from './index.module.css'
import Spinner from 'react-bootstrap/Spinner';


export default function ShowMore({ paginationData }) {
    const { nextLink, isLoading, loadNextItems } = paginationData;

    return (
        nextLink &&
        <button className={styles.btn} onClick={loadNextItems}>
            {
                isLoading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    'See more reviews'
            }
        </button>

    )
}
