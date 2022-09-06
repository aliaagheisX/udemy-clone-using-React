import React from 'react'
import WaitingPage from './WaitingPage';
import Page404 from './Page404'
import Course from './components/Course/Course';
import Resource from './Resource';

function CoursePage({ summary }) {
    const id = 396876;

    return (
        <Resource
            path={`http://localhost:4000/data/${id}`}
            render={data => {
                if (data.loading) return <WaitingPage />
                if (data.error) return <Page404 />
                return <Course summary={summary} details={data.items} />
            }}
        />
    );
}

export default CoursePage;
