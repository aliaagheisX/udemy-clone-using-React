import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom';
import CourseCard from './CourseCard';
import CustomCarsoul from '../CustomCarsoul';
import Parser from '../../Parser';
import { createContext } from 'react';

const server = require('../../config.json')

export const CoursesLoadingContext = createContext();

export default function CoursesContainer({ id }) {
    const limit = 5;
    const [isLoading, setIsLoading] = useState(0);
    const [nextLink, setNextLink] = useState(`${server.course_summary}?categoryId=${id}&_page=1&_limit=${limit}`);
    const [courses, setCourses] = useState([]);
    const [searchParams] = useSearchParams();

    const loadNextCourses = () => {
        /* start loading */
        setIsLoading(1);

        fetch(nextLink)
            .then(res => {
                const parsedHeaderLink = Parser(res.headers.get('link'));
                setNextLink(parsedHeaderLink.next);

                return res.json();
            })
            .then(data => {

                const newCourses = courses.slice();
                newCourses.push(...data);

                setCourses(newCourses);
                setIsLoading(0);
            })
    }

    /* load first courses */
    useEffect(() => {
        loadNextCourses();
    }, [])

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
        <CoursesLoadingContext.Provider value={{ isLoading, nextLink, loadNextCourses }}>
            <CustomCarsoul
                items={
                    filteredCourses().map((e) => (
                        <CourseCard key={e.id} data={e} />
                    ))

                }
            />
        </CoursesLoadingContext.Provider>
    )
}
