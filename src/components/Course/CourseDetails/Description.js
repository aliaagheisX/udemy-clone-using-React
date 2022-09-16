import React, { useContext } from 'react'
import { DetailsContext } from '..'
import styles from './styles/Description.module.css'

export default function Description() {
    const { details: { description } } = useContext(DetailsContext);

    return (
        <div className={styles.description}>
            <h3>Description</h3>
            <pre>{description.trim()}</pre>
        </div>
    )
}
