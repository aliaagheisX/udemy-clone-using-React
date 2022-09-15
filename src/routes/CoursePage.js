import React from 'react'
import Course from '../components/Course/';
import Resource from '../Resource';
import { useLocation, useParams } from 'react-router-dom'

const server = require('../config.json');


function CoursePage() {
    const location = useLocation();

    let params = useParams();
    const id = parseInt(params.courseId);
    const { summary } = location.state;

    return (
        <Resource
            path={`${server.course_data}${id}`}
            render={data => <Course summary={summary} details={data.items} />}
        />
    );
}

export default CoursePage;
