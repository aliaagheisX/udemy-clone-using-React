import React, { useRef, useState, useEffect } from 'react';
import styles from './styles/CourseHeader.module.css'

import TopicMenu from './TopicMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Purchase from './Purchase';
import { RatingDetails, SummaryContext } from '.';
import { useContext } from 'react';



const CourseHeader = React.memo(() => {
    const video = useRef(<div></div>);
    const [purchase, setPurchase] = useState(null);

    useEffect(() => {
        const defaultPosition = video?.current?.offsetHeight + video?.current?.offsetTop;
        const defaultWidth = video?.current?.offsetWidth;
        setPurchase(() => (
            <Purchase video={video}
                defaultWidth={defaultWidth}
                defaultPosition={defaultPosition}
            />
        ))
    }, [])




    return (

        <div className={styles.courseHeader}>
            <Container className='myContainer'>
                <Row>

                    <Col xs={12}>
                        <TopicMenu />
                    </Col>

                    <Col lg={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }}>
                        <CourseHead />
                    </Col>

                    <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <Video ref={video} />


                        {purchase}

                    </Col>

                </Row>

            </Container>
        </div>
    )
});





const Video = React.forwardRef((props, ref) => {
    const { image_750x422: image } = useContext(SummaryContext);
    return (
        <a ref={ref} className={styles.video} href='/'>
            <img src={image} alt="course" />
            <span className={styles.preview}>Preview this course</span>
            <span className={`material-symbols-outlined ${styles.circle}`}>
                play_circle
            </span>
        </a>
    )
})

function Instructors() {
    const { visible_instructors: instructors } = useContext(SummaryContext);
    return <span className={styles.instructors}>
        Created by {instructors.map((i, index) => (
            <a key={i.id} href={`#instructor-${index}`}>
                {i.display_name}
                {index !== instructors.length - 1 ? ',' : ''}
            </a>
        ))}
    </span>;
}


function Updates() {
    const {
        last_update_date: date,
        locale: { simple_english_title: language },
        caption_languages: captions,

    } = useContext(SummaryContext);
    const [year, month] = date.split('-');

    return <Row xs={1} md={'auto'} className={styles.updates}>
        <Col>
            <span className="material-symbols-outlined"> new_releases </span>
            <span> Last updated {month}/{year} </span>
        </Col>
        <Col>
            <span className="material-symbols-outlined"> language </span>
            <span>{language}</span>
        </Col>
        <Col>
            <span className="material-symbols-outlined"> closed_caption </span>
            <span>{captions.slice(0, 2).join(', ')}</span>
            {/*TODO: enhance to complete list*/}
        </Col>
    </Row>;

}

const CourseHead = () => {
    const {
        title,
        headline,
    } = useContext(SummaryContext);

    return (
        <div className={styles.head}>
            <h1> {title} </h1>
            <p>{headline}</p>

            <div className={styles.details}>
                <RatingDetails />

                <Instructors />

                <Updates />
            </div>
        </div>
    );
}

export default CourseHeader;
