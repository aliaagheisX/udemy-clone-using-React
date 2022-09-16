import React, { createContext } from 'react';
import CourseHeader from './CourseHeader'
import CourseNavbar from './CourseNavbar';
import Overview from './Overview';
import CourseContent from './CourseContent/';
import SideContainer from '../SideContainer';
import SideNav from './SideNav';
import CourseDetails from './CourseDetails';
import Instructors from './Instructor';
import Reviews from './Reviews';
import Pagination from '../../Pagination'

export const SummaryContext = createContext();
export const DetailsContext = createContext();

const server = require('../../config.json');
const Course = ({ details, summary, reviews }) => {
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

                        <Pagination
                            path={`${server.course_reviews}?courseId=${summary.id}`}
                            limit={3}
                            render={({ items, paginationData }) => <Reviews paginationData={paginationData} results={items} />}
                        />


                    </SideContainer>
                </div>
            </DetailsContext.Provider>
        </SummaryContext.Provider>
    )
}

export default Course;