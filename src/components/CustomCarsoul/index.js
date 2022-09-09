import React, { useState, useRef, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import CarsoulBtn from './CarsoulBtn';
import './CustomCarsoul.css'
export default function CustomCarsoul({ children }) {

    /* states */
    const [displayPrev, setDisplayPrev] = useState(false);
    const [displayNext, setDisplayNext] = useState(true);
    const [leftPos, setLeftPos] = useState(0);
    /* row ref to control sliding */
    const rowRef = useRef(0);

    useEffect(() => {
        rowRef.current.scroll({
            left: (leftPos),
            behavior: 'smooth'
        });
    }, [leftPos]);

    useEffect(() => {
        scrollHandeler('prev');
    }, [children])

    const scrollHandeler = (behavior) => {
        /* element getters */
        const row = rowRef?.current;
        const appearWidth = row?.offsetWidth;
        const childWidth = row?.children[0]?.offsetWidth;
        const childrenNum = row?.children?.length;

        const maxLeft = childrenNum * childWidth;

        const step = Math.max(appearWidth - childWidth, childWidth);
        let left = row?.scrollLeft;
        left += behavior === 'next' ? +step : -step;


        left = Math.max(left, 0);
        left = Math.min(left, maxLeft);

        setLeftPos(left);
        setDisplayPrev(left - step > 0);
        setDisplayNext(left + step < maxLeft);

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
