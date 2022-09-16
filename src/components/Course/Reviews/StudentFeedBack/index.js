import React, { useContext } from 'react';
import { RatingDist } from './RatingDist';
import { AverageRating } from './AverageRating';
import { DetailsContext } from '../..';
import Bar from './Bar';
import styles from './styles/index.module.css'
export default function StudentFeedBack() {
    const { review: { count: totalCount, ratingDistribution, averageRating } } = useContext(DetailsContext);

    return (
        <div>
            <h3>Student Feedback</h3>
            <div className={styles.container}>
                <AverageRating averageRating={averageRating} />

                <div className={styles.dist}>
                    {
                        ratingDistribution.map(({ rating, count }) => {
                            const precentage = Math.round(count / totalCount * 100);
                            return (
                                <div className={styles.ratings} key={rating}>
                                    <Bar precentage={precentage} />
                                    <RatingDist rating={rating} count={count} precentage={precentage} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
