import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';

import Card from './Card';
import CarsoulBtn from './CarsoulBtn';

import styles from './styles/categoryStyles.module.css';



function CategoryDescription({ title, header, description }) {
    return (
        <>
            <h3>{header}</h3>
            <p>{description}</p>
            <a className='btn' href='/'>{`Explore ${title}`}</a>
        </>
    )
}

export default function Category({ data }) {
    const title = data.title.slice(15);
    const titleID = title.replace(/ /g, '-');


    const test = (behavior) => {
        /* element getters */
        const carousel = document.querySelector(`#courses-${titleID} .carousel`);
        const row = carousel.children[0];

        /* scroll calculation */
        const step = Math.max(row.offsetWidth - row.children[0].offsetWidth, row.children[0].offsetWidth);
        let left = row.scrollLeft;
        left += behavior === 'next' ? +step : -step;

        row.scroll({
            left: (left),
            behavior: 'smooth'
        });
    }

    return (
        <div className={`myContainer ${styles.courseContent}`} id={`courses-${titleID}`}>

            <CategoryDescription title={title} description={data.description} header={data.header} />

            <Carousel indicators={false}
                prevIcon={<CarsoulBtn btnClickHandel={test} behaviour='before' />}
                nextIcon={<CarsoulBtn btnClickHandel={test} behaviour='next' />}
            >
                <Row xs={1} sm={2} md={3} lg={5}>
                    {
                        data.courses.map((e) => (
                            <Card key={e.id} data={e}></Card>
                        ))
                    }
                </Row>
            </Carousel>
        </div >
    )
}
