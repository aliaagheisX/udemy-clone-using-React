import React from 'react'

import { useSearchParams } from 'react-router-dom';
import CourseCard from './CourseCard';
import CustomCarsoul from '../CustomCarsoul';

export default function CoursesContainer({ paginationData, courses = [] }) {
    const [searchParams] = useSearchParams();
    /* filtered Courses */
    const filteredCourses = () => (
        courses.filter(({ title }) => {
            const filter = searchParams.get("filter");
            if (!filter) return true;
            const name = title.toLowerCase();
            return name.includes(filter.toLowerCase());
        })
    )

    return (
        <CustomCarsoul
            items={
                filteredCourses().map((e) => (
                    <CourseCard key={e.id} data={e} />
                ))
            }
            paginationData={paginationData}
        />
    )
}
