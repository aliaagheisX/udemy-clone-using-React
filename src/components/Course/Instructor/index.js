import Links from './Links';
import React from 'react'
import { useContext } from 'react'
import { SummaryContext } from '..'

import styles from './styles/index.module.css'
import ShowMore from '../../ShowMore';

export default function Instructors() {
    const { visible_instructors: instructors } = useContext(SummaryContext);
    return (
        <section id='instructor' className={styles.container}>
            <h3>Instructor{instructors.length > 1 ? 's' : ''}</h3>
            {
                instructors.map(({
                    display_name,
                    job_title,
                    image_100x100: image,
                    url,
                    description,
                    id,
                    ...data
                }) => (
                    <ShowMore key={id} >
                        <div className={styles.ins}>
                            <div>
                                <a href={url} className={styles.title}>{display_name}</a>
                                <span className={styles.jop}>{job_title}</span>
                            </div>
                            <div className={styles.cont}>
                                <img src={image} alt='instructor' />
                                <Links data={data} />
                            </div>
                            <div>
                                <p className={styles.desc}>{description}</p>
                            </div>
                        </div>
                    </ShowMore>
                ))
            }
        </section >
    )
}
