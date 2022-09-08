import React from 'react'
import Waiting from '../Layouts/Waiting';
import Error from '../Layouts/Error';
import Course from '../components/Course/';
import Resource from '../Resource';
import { useLocation, useParams } from 'react-router-dom'

function CoursePage() {
    const location = useLocation();

    let params = useParams();
    const id = parseInt(params.courseId);
    const { summary } = location.state;

    return (
        <Resource
            path={`http://localhost:4000/data/${id}`}
            render={data => {
                if (data.loading) return <Waiting />
                if (data.error) return <Error />
                return <Course summary={summary} details={data.items} />
            }}
        />
    );
}

export default CoursePage;
