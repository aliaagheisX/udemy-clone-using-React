import React, { useRef, useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';

import CourseCard from './CourseCard'
import CarsoulBtn from './CarsoulBtn';

import styles from './styles/Category.module.css';
import Button from './../utils/Button';

function CategoryDescription({ title, header, description }) {
    return (
        <>
            <h3>{header}</h3>
            <p>{description}</p>

            <Button href='/'>{`Explore ${title.slice(15)}`}</Button>
        </>
    )
}


export default function CategoryContent({ data }) {
    const { title, header, description, items } = data;
    /* states */
    const [currentSlide, setCurrentSlide] = useState(0);
    const [displayPrev, setDisplayPrev] = useState(false);
    const [displayNext, setDisplayNext] = useState(true);
    /* ref */
    const rowRef = useRef(0);


    useEffect(() => {
        rowRef.current.children[currentSlide].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    }, [currentSlide]);

    const scrollHandeler = (behavior) => {
        /* element getters */
        const row = rowRef.current;

        /* scroll calculation */
        const step = Math.round(row.offsetWidth / row.children[0].offsetWidth) - 1 || 1;

        const curr = behavior === 'next' ?
            Math.min(currentSlide + step, row.children.length - step - 1) :
            Math.max(0, currentSlide - step);


        /* update states */
        setCurrentSlide(curr);
        setDisplayPrev(curr);
        setDisplayNext((curr !== row.children.length - step - 1));
    }

    return (
        <div className={`myContainer ${styles.courseContent}`} >

            <CategoryDescription title={title} description={description} header={header} />

            <Carousel
                indicators={false}
                prevIcon={<CarsoulBtn display={displayPrev} btnClickHandel={scrollHandeler} behaviour='before' />}
                nextIcon={<CarsoulBtn display={displayNext} btnClickHandel={scrollHandeler} behaviour='next' />}
            >
                <Carousel.Item>
                    <Row xs={1} sm={2} md={3} lg={5} ref={rowRef}>
                        {
                            items.map((e) => (
                                <CourseCard key={e.id} data={e} />
                            ))
                        }
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}


