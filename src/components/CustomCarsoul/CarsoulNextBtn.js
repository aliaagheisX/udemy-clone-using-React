import React, { useEffect, useContext } from 'react'
import styles from './CustomCarsoul.module.css'
import { useSwiper } from "swiper/react";
import Spinner from 'react-bootstrap/Spinner';
import { CoursesLoadingContext } from '../Category/CoursesContainer';

export default function CarsoulNextBtn({ display }) {
    const { nextLink, isLoading, loadNextCourses } = useContext(CoursesLoadingContext);

    const swiper = useSwiper();
    const clickHandeler = () => {
        if (nextLink)
            loadNextCourses();
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
