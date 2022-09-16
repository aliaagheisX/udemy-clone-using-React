import React from 'react'
import CoursesContainer from './CoursesContainer'
import styles from './styles/Category.module.css';
import CategoryDescription from './CategoryDescription';
import Pagination from '../../Pagination';

const server = require('../../config.json')

export default function CategoryContent({ data }) {
    const { id, title, header, description } = data;
    const path = `${server.course_summary}?categoryId=${id}`;

    return (
        <div className={styles.courseContent} >

            <CategoryDescription title={title} description={description} header={header} />


            <Pagination
                path={path}
                limit={5}
                render={({ items, paginationData }) => (
                    <CoursesContainer
                        courses={items}
                        paginationData={paginationData} />
                )}
            />

        </div >
    );
}


