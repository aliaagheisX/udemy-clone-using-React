import React, { useState, useContext } from 'react';
import { Stars } from '../../utils/RatingDescription'
import { DetailsContext } from '..';
import StudentFeedBack from './StudentFeedBack';
import Form from './Form';
export default function Reviews() {
    const { review: { results } } = useContext(DetailsContext);

    return (
        <section id='reviews'>
            <StudentFeedBack />

            <div>
                <h3>Reviews</h3>
                <Form />
                {
                    results.map(({ rating, id, content, created_formatted_with_time_since, user: { public_display_name, initials } }) => (
                        <div key={id}>
                            <div>
                                <span className="circle">{initials}</span>
                                <div>
                                    <span>{public_display_name}</span>
                                    <div>
                                        <Stars rating={rating} />
                                        <span>{created_formatted_with_time_since}</span>
                                    </div>
                                </div>
                            </div>
                            <p>{content}</p>
                            <ul>
                                <li><a href='/'>
                                    <span className="material-symbols-outlined">thumb_up</span>
                                </a></li>
                                <li><a href='/'>
                                    <span className="material-symbols-outlined">thumb_down</span>
                                </a></li>
                                <li><a href='/'>Report</a></li>
                            </ul>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
