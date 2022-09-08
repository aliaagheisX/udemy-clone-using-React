import React from 'react'
import styles from './styles/Price.module.css'
export default function Price({ discount, price }) {
    return (
        <span className={styles.price}>
            {discount}
            <span className={styles.cancelledPrice}>{price}</span>
        </span>
    )
}
