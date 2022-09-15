import React from 'react'
import Course from '../components/Course/';
import Resource from '../Resource';
import { useParams } from 'react-router-dom'

const server = require('../config.json');


function CoursePage() {
    let params = useParams();
    const id = parseInt(params.courseId);

    return (
        <Resource
            path={`${server.course_summary}/${id}`}
            render={({ items: summary }) => (
                <Resource
                    path={`${server.course_data}${id}`}
                    render={({ items: details }) => <Course summary={summary} details={details} />}
                />
            )}
        />
    );
}

export default CoursePage;
