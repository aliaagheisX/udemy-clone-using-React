import React from 'react'
import { useContext } from 'react'
import { DetailsContext } from '.'

export default function CourseDetails() {
    const { details: {
        Requirements,
        description,
        for_who
    } } = useContext(DetailsContext);
    return (
        <section>
            <div className="requirements">
                <h3>Requirements</h3>
                <ul>
                    {Requirements.map((e, index) => <li key={index}>{e}</li>)}
                </ul>
            </div>
            <div className="description">
                <h3>Description</h3>
                <pre>{description}</pre>
            </div>
            <div className="for-who">
                <h3>Who this course is for:</h3>
                <ul>
                    {for_who.split('\n').map((e, index) => <li key={index}>{e}</li>)}
                </ul>
            </div>
        </section>
    )
}
