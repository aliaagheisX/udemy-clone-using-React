import React from 'react'
import CoursesContainer from './CoursesContainer'
import styles from './styles/Category.module.css';
import CategoryDescription from './CategoryDescription';

export default function CategoryContent({ data }) {
    const { id, title, header, description } = data;

    return (
        <div className={styles.courseContent} >

            <CategoryDescription title={title} description={description} header={header} />

            <CoursesContainer id={id} />
        </div >
    );
}


