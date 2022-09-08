import React from 'react'
import CourseHeader from './CourseHeader'
import CourseNavbar from './CourseNavbar';
import { DetailedRating } from '../utils/RatingDescription'

import { createContext, useContext } from 'react';
import Overview from './Overview';
import CourseContent from './CourseContent';
import SideContainer from '../SideContainer';
import SideNav from './SideNav';
import CourseDetails from './CourseDetails';
import Instructors from './Instructors';

import Reviews from './Reviews';
export const SummaryContext = createContext();
export const DetailsContext = createContext();


export const RatingDetails = () => {
    const summary = useContext(SummaryContext);
    return (<DetailedRating
        isBestSeller={summary.bestseller_badge_content}
        num_subscribers={summary.num_subscribers}
        rating={summary.rating}
        num_reviews={summary.num_reviews}
    />
    )
}
const Course = ({ details, summary }) => {
    return (
        <SummaryContext.Provider value={summary}>
            <div id='CoursePage'>
                <CourseNavbar title={summary.title} />


                <CourseHeader />
                <SideNav />

                <SideContainer>

                    <Overview />

                    <DetailsContext.Provider value={details}>
                        <CourseContent />
                        <CourseDetails />
                        <Instructors />
                        <Reviews />
                    </DetailsContext.Provider>



                </SideContainer>
            </div>
        </SummaryContext.Provider>
    )
}


/* 
function WhatWillLearn({ e, i }) {
    return (<div className='card'>
        <h3>What you'll learn</h3>
        <Row xs={1} sm={2}>
            {summary.objectives_summary.map((e, i) => <Col key={i}>
                <span class="material-symbols-outlined">
                    done
                </span>
                <span>
                    {e}
                </span>
            </Col>)}
        </Row>
    </div>);
} */

export default Course;