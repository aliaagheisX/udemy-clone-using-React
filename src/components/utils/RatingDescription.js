import React from 'react'
import BestSeller from './BestSeller';
import styles from './styles/RatingDescription.module.css'
import PropTypes from 'prop-types'


export default function BreifRating({ rating, num_reviews }) {
    return (

        <div className={styles.ratingDescription}>
            <RatingDescription rating={rating} />
            <span className={styles.utiltiyComment}>({num_reviews.toLocaleString()})</span>

        </div>
    )
}

BreifRating.propTypes = {
    rating: PropTypes.number.isRequired,
    num_reviews: PropTypes.number.isRequired
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

DetailedRating.propTypes = {
    rating: PropTypes.number.isRequired,
    num_reviews: PropTypes.number.isRequired,
    num_subscribers: PropTypes.number.isRequired,
    isBestSeller: PropTypes.any,
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

Stars.propTypes = {
    rating: PropTypes.number.isRequired
}


function RatingDescription({ rating }) {

    return (
        <>
            <span className={styles.rating}>{rating.toPrecision(2)}</span>
            <Stars rating={rating} />
        </>
    )
}






