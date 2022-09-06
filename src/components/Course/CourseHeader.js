import React, { useRef, useState, useEffect } from 'react';
import styles from './styles/CourseHeader.module.css'

import TopicMenu from '../utils/TopicMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Purchase from './Purchase';

const CourseHeader = React.memo(({ summary, ratingDetails }) => {
    const {
        image_750x422: image,
        title,
        headline,
        visible_instructors: instructors,
        last_update_date: date,
        context_info: { category, label },
        locale: { simple_english_title: language },
        caption_languages: captions,
        price: {
            list_price: price,
            discount_price: discount
        },
        content_info,

    } = summary;
    const [year, month] = date.split('-')


    const video = useRef(null);
    const [purchase, setPurchase] = useState(<div></div>);

    useEffect(() => {
        const defaultPosition = video?.current?.offsetHeight + video?.current?.offsetTop;
        const defaultWidth = video?.current?.offsetWidth;
        setPurchase(() => (
            <Purchase video={video}
                defaultWidth={defaultWidth}
                defaultPosition={defaultPosition}
                price={price}
                discount={discount}
                content_info={content_info} />
        ))
    }, [])




    return (

        <div className={styles.courseHeader}>
            <Container className='myContainer'>
                <Row>

                    <Col xs={12}>
                        <TopicMenu category={category} label={label} />
                    </Col>

                    <Col lg={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }}>
                        <CourseHead
                            title={title}
                            headline={headline}
                            ratingDetails={ratingDetails}
                            Instructors={Instructors} instructors={instructors}
                            Updates={Updates}
                            month={month}
                            year={year}
                            language={language}
                            captions={captions}
                        />
                    </Col>

                    <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <Video image={image} ref={video} />


                        {purchase}

                    </Col>

                </Row>

            </Container>
        </div>
    )
});





const Video = React.forwardRef(({ image }, ref) => (
    <a ref={ref} className={styles.video} href='/'>
        <img src={image} alt="course" />
        <span className={styles.preview}>Preview this course</span>
        <span className={`material-symbols-outlined ${styles.circle}`}>
            play_circle
        </span>
    </a>
))

function Instructors(instructors) {
    return <span className={styles.instructors}>
        Created by {instructors.map((i, index) => (
            <a key={i.id} href={`#instructor-${index}`}>
                {i.display_name}
                {index !== instructors.length - 1 ? ',' : ''}
            </a>
        ))}
    </span>;
}


function Updates(month, year, language, captions) {
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

const CourseHead = ({ title, headline, ratingDetails, Instructors, instructors, Updates, month, year, language, captions }) => {
    return (<div className={styles.head}>
        <h1> {title} </h1>
        <p>{headline}</p>

        <div className={styles.details}>
            {ratingDetails()}

            {Instructors(instructors)}

            {Updates(month, year, language, captions)}
        </div>
    </div>);
}

export default CourseHeader;
