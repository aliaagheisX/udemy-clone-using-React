import React from 'react'
import styles from './styles/CourseCard.module.css'
import Instructors from './Instructors';
import CourseName from './CourseName';
import RatingDescription from '../../utils/RatingDescription';
import BestSeller from '../../utils/BestSeller';
import Price from '../../utils/Price';

export default function CourseCard({ data }) {
    const {
        image_750x422: image,
        num_reviews,
        rating,
        visible_instructors: instructors,
        price: {
            list_price: price,
            discount_price: discount
        }
    } = data;
    return (
        <div className={`${styles.course}`}>

            {/* course image */}
            <img src={image} alt="course" />

            <CourseName data={data} />

            {/* course instructor names */}
            <Instructors instructors={instructors} />

            <RatingDescription rating={rating} num_reviews={num_reviews} />

            {/* course Price */}
            <Price discount={discount?.price_string} price={price?.price_string} />

            <BestSeller isBestSeller={data.bestseller_badge_content} />
        </div >
    )
}