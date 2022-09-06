import React from 'react'
import BestSeller from './BestSeller';
import styles from './RatingDescription.module.css'

export default function BreifRating({ rating, num_reviews }) {
    return (

        <div className={styles.ratingDescription}>
            <RatingDescription rating={rating} />
            <span className={styles.utiltiyComment}>({num_reviews.toLocaleString()})</span>

        </div>
    )
}

export function DetailedRating({ rating, num_reviews, num_subscribers, isBestSeller }) {
    return (
        <div className={styles.ratingDescription}>
            <BestSeller isBestSeller={isBestSeller} />
            <RatingDescription rating={rating} />
            <a href="#reviews" className={styles.link}>({num_reviews.toLocaleString()} ratings)</a>
            <span className={styles.students}>{num_subscribers.toLocaleString()} students</span>
        </div>
    )
}


export function Stars({ rating }) {
    const getStarsNode = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            //make star element as full star is the default
            if (Math.ceil(rating) < i)
                stars.push(<span key={i} className={`material-symbols-outlined ${styles.emptyStar}`}> star </span>)
            else if (rating < i)
                stars.push(<span key={i} className='material-symbols-outlined'> star_half </span>);

            else
                stars.push(<span key={i} className='material-symbols-outlined'> star </span>);
        }

        return stars;
    }

    return (
        <div className={styles.stars}>{getStarsNode()}</div>
    )

}

function RatingDescription({ rating }) {

    return (
        <>
            <span className={styles.rating}>{rating.toPrecision(2)}</span>
            <Stars rating={rating} />
        </>
    )
}






