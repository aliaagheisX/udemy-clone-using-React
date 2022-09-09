import React, { useContext } from 'react'
import { SummaryContext } from '..';
import styles from './styles/Price.module.css'
export default function Price() {
    const { price: {
        list_price: price,
        discount_price: discount
    } } = useContext(SummaryContext);

    return (
        <div>
            <div className={styles.price}>
                <h3 className={styles.currPrice}>{discount.price_string}</h3>

                <span className={styles.prevPrice}>{price.price_string}</span>
                <span className={styles.precent}>
                    {(discount.amount / price.amount * 100).toPrecision(3)}% off
                </span>
            </div>
            <div className={styles.hours}>
                <span className="material-symbols-outlined">
                    alarm
                </span>
                <strong>16 hours</strong>
                <span>left at this price!</span>
            </div>
        </div>
    )
}
