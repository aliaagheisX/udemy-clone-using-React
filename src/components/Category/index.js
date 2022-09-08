import React from 'react'
import CategoryTabs from './CategoryTabs'
import styles from './styles/Category.module.css'
import Resource from '../../Resource'
import Waiting from '../../Layouts/Waiting'
import Error from '../../Layouts/Error'
export default function Category({ data }) {
    return (
        <section className={`${styles.coursesSection} myContainer`}>

            <h2>A broad selection of courses</h2>
            <p>Choose from 185,000 online video courses with new additions published every month</p>


            <Resource
                path="http://localhost:4000/summary"
                render={data => {
                    if (data.loading) return <Waiting />
                    if (data.error) return <Error />
                    return <CategoryTabs data={data.items} />
                }}
            />

        </section>
    )
}
