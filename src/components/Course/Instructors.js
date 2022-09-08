import React from 'react'
import { useContext } from 'react'
import { SummaryContext } from '.'

export default function Instructors() {
    const { visible_instructors: instructors } = useContext(SummaryContext);
    return (
        <section id='instructor'>
            {
                instructors.map(({
                    display_name,
                    job_title,
                    image_100x100: image,
                    url,
                    Instructor_Rating,
                    Reviews, Students,
                    Courses,
                    description,
                    id
                }) => (
                    <div key={id}>
                        <a href={url}>{display_name}</a>
                        <span>{job_title}</span>
                        <div>
                            <img src={image} alt='instructor' />
                            <ul>
                                <li>
                                    <span className="material-symbols-outlined">star</span>
                                    <span>{Instructor_Rating} Instructor Rating</span>
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">workspace_premium</span>
                                    <span>{Reviews} Reviews</span>
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">group</span>
                                    <span>{Students} Students</span>
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">play_circle</span>
                                    <span>{Courses} Courses</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>{description}</p>
                            <button>Show more</button>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
