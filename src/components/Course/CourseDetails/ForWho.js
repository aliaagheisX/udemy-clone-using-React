import React, { useContext } from 'react'
import { DetailsContext } from '..'
import styles from './styles/List.module.css'
export default function ForWho() {
    const { details: { for_who } } = useContext(DetailsContext);
    return (
        <div className={styles.List}>
            <h3>Who this course is for:</h3>
            <ul>
                {for_who.split('\n').map((e, index) => <li key={index}>{e}</li>)}
            </ul>
        </div>
    )
}
