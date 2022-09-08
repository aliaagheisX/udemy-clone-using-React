import React from 'react'
import CourseCard from './CourseCard/index'

import styles from './styles/Category.module.css';
import CustomCarsoul from '../CustomCarsoul';
import CategoryDescription from './CategoryDescription';
import { useSearchParams } from 'react-router-dom';

export default function CategoryContent({ data }) {
    const { title, header, description, items } = data;
    const [searchParams] = useSearchParams();


    return (
        <div className={`myContainer ${styles.courseContent}`} >

            <CategoryDescription title={title} description={description} header={header} />

            <CustomCarsoul>
                {
                    items.filter((c) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        const name = c.title.toLowerCase();
                        return name.includes(filter.toLowerCase());
                    }).map((e) => (
                        <CourseCard key={e.id} data={e} />
                    ))
                }
            </CustomCarsoul>
        </div >
    );
}


