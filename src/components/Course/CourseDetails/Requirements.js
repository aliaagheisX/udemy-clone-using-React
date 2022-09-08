import React, { useContext } from 'react'
import { DetailsContext } from '..'
import styles from './styles/List.module.css'
export default function Requirements() {
    const { details: { Requirements } } = useContext(DetailsContext);

    return (
        <div className={styles.List}>
            <h3>Requirements</h3>
            <ul>
                {Requirements.map((e, index) => <li key={index}>{e}</li>)}
            </ul>
        </div>
    )
}
