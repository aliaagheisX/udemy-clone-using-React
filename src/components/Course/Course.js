import CourseNavbar from './CourseNavbar';
import React from 'react'
import CourseHeader from './CourseHeader'
import { DetailedRating } from '../utils/RatingDescription'
import Navbar from '../Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Course = ({ details, summary }) => {
    const ratingDetails = () => (
        <DetailedRating
            isBestSeller={summary.bestseller_badge_content}
            num_subscribers={summary.num_subscribers}
            rating={summary.rating}
            num_reviews={summary.num_reviews}
        />
    )
    return (
        <>

            <Navbar />
            <CourseNavbar title={summary.title} ratingDetails={ratingDetails} />
            <CourseHeader summary={summary} ratingDetails={ratingDetails} />

            <Container className='myContainer' style={{ display: 'block' }}>
                <Row>
                    <Col xs={12} lg={8}>

                        <div className='card'>
                            <Row xs={1} sm={2}>
                                {
                                    summary.objectives_summary.map((e, i) => (
                                        <Col key={i}>{e}</Col>
                                    ))
                                }
                            </Row>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Course;