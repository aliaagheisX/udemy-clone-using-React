import React, { useState, useRef, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import CarsoulBtn from './CarsoulBtn';
import './CustomCarsoul.css'
export default function CustomCarsoul({ children }) {

    /* states */
    const [currentSlide, setCurrentSlide] = useState(0);
    const [displayPrev, setDisplayPrev] = useState(false);
    const [displayNext, setDisplayNext] = useState(true);
    /* row ref to control sliding */
    const rowRef = useRef(0);
    useEffect(() => {
        if (rowRef.current.children.length > currentSlide && currentSlide >= 0) {
            rowRef.current.children[currentSlide].scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
            });
        }
    }, [currentSlide]);

    useEffect(() => {
        scrollHandeler('prev');

    }, [children])

    const scrollHandeler = (behavior) => {
        /* element getters */
        const row = rowRef.current;


        /* scroll calculation */
        const appearChild = Math.round(row.offsetWidth / row?.children[0]?.offsetWidth) || 0;
        const step = Math.max(appearChild - 1, 1);
        const maxSlide = row.children.length - step - 1;


        const curr = behavior === 'next' ?
            Math.min(currentSlide + step, maxSlide) :
            Math.max(0, currentSlide - step);

        /* update states */
        setCurrentSlide(curr);
        setDisplayPrev(curr);

        setDisplayNext((curr < maxSlide) && (maxSlide > 0) && (curr >= 0));
    }


    return (
        <Carousel
            indicators={false}
            prevIcon={<CarsoulBtn display={displayPrev} btnClickHandel={scrollHandeler} behaviour='before' />}
            nextIcon={<CarsoulBtn display={displayNext} btnClickHandel={scrollHandeler} behaviour='next' />}
        >
            <Carousel.Item>
                <Row xs={1} sm={2} md={3} lg={5} ref={rowRef}>

                    {children}

                </Row>
            </Carousel.Item>
        </Carousel>
    )
}
