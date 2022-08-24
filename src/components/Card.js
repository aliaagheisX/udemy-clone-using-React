import React from 'react'
import styles from './cardStyles.module.css'
function Card(props) {
    const courseData = props.data;
    const getStarsNode = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            //make star element as full star is the default
            if (Math.ceil(courseData.rating) < i)
                stars.push(<span key={i} className={`material-symbols-outlined ${styles.emptyStar}`}> star </span>)
            else if (courseData.rating < i)
                stars.push(<span key={i} className='material-symbols-outlined'> star_half </span>);

            else
                stars.push(<span key={i} className='material-symbols-outlined'> star </span>);
        }

        return stars;

    }

    const titleID = courseData.title.replace(/ /g, '-');


    return (
        <div className={`${styles.course}`}>
            < img src={courseData.image} alt="course" />
            <h4 className={styles.courseName}>
                <a href={`https://www.udemy.com/course/${titleID}`}>
                    {courseData.title}
                </a>
            </h4>

            <span className={styles.utiltiyComment}>{courseData.instructors[0].name}</span>

            <div className={styles.ratingDescription}>
                <span className={styles.rating}>{courseData.rating.toPrecision(2)}</span>
                <div className={styles.stars}>{getStarsNode()}</div>
                <span className={styles.utiltiyComment}>{courseData.people}</span>
            </div>

            <span className={styles.price}>E£{courseData.price}</span>

            {courseData.bestSeller ? <span className={styles.badge}>Bestseller</span> : <></>}
        </div >
    )
}

export default Card