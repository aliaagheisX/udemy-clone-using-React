import React, { useEffect } from 'react'
import styles from './CustomCarsoul.module.css'
import { useSwiper } from "swiper/react";
import Spinner from 'react-bootstrap/Spinner';

export default function CarsoulNextBtn({ display, paginationData }) {
    const { nextLink, isLoading, loadNextItems } = paginationData;

    const swiper = useSwiper();
    const clickHandeler = () => {
        if (nextLink)
            loadNextItems();
        else swiper.slideNext();


    }

    /* if isLoading change from [1 -> 0] slide */
    useEffect(() => {
        if (!isLoading) swiper.slideNext();
    }, [isLoading]);

    return (
        display && (
            <span className={styles.next} onClick={clickHandeler}>
                {
                    isLoading ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        :
                        <span className='material-symbols-outlined'>navigate_next</span>
                }
            </span>
        )
    )
}
