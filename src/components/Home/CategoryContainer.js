import React from 'react'
import CategoryTabs from './CategoryTabs'
import styles from './styles/Category.module.css'
export default function CategoryContainer({ data }) {
    return (
        <section className={`${styles.coursesSection} myContainer`}>

            <h2>A broad selection of courses</h2>
            <p>Choose from 185,000 online video courses with new additions published every month</p>


            <CategoryTabs data={data} />

        </section>
    )
}
