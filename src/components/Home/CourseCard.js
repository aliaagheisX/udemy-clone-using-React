import React from 'react'
import BestSeller from '../utils/BestSeller';
import styles from './styles/cardStyles.module.css'
import RatingDescription from '../utils/RatingDescription';

function CourseName({ title, url }) {
    return (
        <h4 className={styles.courseName}>
            <a href={url}>
                {title}

            </a>
        </h4>
    )
}
export default function CourseCard({ data }) {
    const {
        image_750x422: image,
        title,
        url,
        num_reviews,
        rating,
        visible_instructors: instructors,
        price: { list_price: { price_string: price } }
    } = data;
    return (
        <div className={`${styles.course}`}>

            {/* course image */}
            <img src={image} alt="course" />

            <CourseName title={title} url={url} />

            {/* course instructor names */}
            <span className={styles.utiltiyComment}>
                {
                    instructors.map((e, i) => {
                        const s = (i !== instructors.length - 1) ? ', ' : '';
                        return e.display_name + s;
                    })
                }
            </span>

            <RatingDescription rating={rating} num_reviews={num_reviews} />

            {/* course Price */}
            <span className={styles.price}>
                {data.price.discount_price?.price_string}
                <span className={styles.cancelledPrice}>{price}</span>
            </span>

            <BestSeller isBestSeller={data.bestseller_badge_content} />
        </div >
    )
}