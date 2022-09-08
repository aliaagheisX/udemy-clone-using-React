import React from 'react'
import { useState } from 'react';
import { Stars } from '../utils/RatingDescription'
import { DetailsContext } from '.';
import { useContext } from 'react';


export default function Reviews() {
    const { review: { count: totalCount, ratingDistribution, results, averageRating } } = useContext(DetailsContext);


    const [ratingsFilter, setRatingFilter] = useState('0');
    return (
        <section id='reviews'>

            <div>
                <h3>Student Feedback</h3>
                <div>
                    <div>{averageRating.toPrecision(2)} course rating</div>
                    <div>
                        {
                            ratingDistribution.map(({ rating, count }) => (
                                <span key={rating}>
                                    <Stars rating={rating} />
                                    <span>{Math.round((count / totalCount) * 100)}%</span>
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <h3>Reviews</h3>
                <form>
                    <select value={ratingsFilter} onChange={(e) => setRatingFilter(e.target.value)}>
                        <option value="0">All Ratings</option>
                        <option value="5">Five stars</option>
                        <option value="4">Four stars</option>
                        <option value="3">Three stars</option>
                        <option value="2">Two stars</option>
                        <option value="1">One stars</option>
                    </select>
                </form>
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
