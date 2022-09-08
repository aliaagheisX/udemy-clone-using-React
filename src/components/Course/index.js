import React from 'react'
import CourseHeader from './CourseHeader'
import CourseNavbar from './CourseNavbar';
import { DetailedRating } from '../utils/RatingDescription'

import { createContext, useContext } from 'react';
import Overview from './Overview';
import CourseContent from './CourseContent/';
import SideContainer from '../SideContainer';
import SideNav from './SideNav';
import CourseDetails from './CourseDetails';
import Instructors from './Instructor';
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
            <DetailsContext.Provider value={details}>
                <div id='CoursePage'>
                    <CourseNavbar title={summary.title} />


                    <CourseHeader />
                    <SideNav summary={summary} />

                    <SideContainer>

                        <Overview />

                        <CourseContent />
                        <CourseDetails />
                        <Instructors />
                        <Reviews />

                    </SideContainer>
                </div>
            </DetailsContext.Provider>
        </SummaryContext.Provider>
    )
}

export default Course;