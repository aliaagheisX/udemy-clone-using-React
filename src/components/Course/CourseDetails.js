import React from 'react'
import { useContext } from 'react'
import { DetailsContext } from './Course'

export default function CourseDetails() {
    const { details: {
        Requirements,
        description,
        for_who
    } } = useContext(DetailsContext);
    return (
        <section>
            <ul className="requirements">
                {Requirements.map()}
            </ul>
        </section>
    )
}
