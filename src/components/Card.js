import React from 'react'
import styles from './styles/cardStyles.module.css'


function CourseName({ title }) {
    return (
        <h4 className={styles.courseName}>
            <a
                href={`./${title.replace(/ /g, '-')}`}
            >
                {title}

            </a>
        </h4>
    )
}

function RatingDescription({ rating, peopleAttend }) {
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
        <div className={styles.ratingDescription}>
            <span className={styles.rating}>{rating.toPrecision(2)}</span>
            <div className={styles.stars}>{getStarsNode()}</div>
            <span className={styles.utiltiyComment}>({peopleAttend.toLocaleString()})</span>
        </div>
    )
}

function BestSeller({ isBestSeller }) {
    return isBestSeller && <span className={styles.badge}>Bestseller</span>;
}

export default function Card({ data }) {
    return (
        <div className={`${styles.course}`}>

            {/* course image */}
            <img src={data.image} alt="course" />

            <CourseName title={data.title} />

            {/* course instructor names */}
            <span className={styles.utiltiyComment}>{data.instructors[0].name}</span>

            <RatingDescription rating={data.rating} peopleAttend={data.people} />

            {/* course Price */}
            <span className={styles.price}>E£{data.price}</span>

            <BestSeller isBestSeller={data.bestSeller} />
        </div >
    )
}