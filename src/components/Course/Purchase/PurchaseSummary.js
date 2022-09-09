import React from "react";
import styles from './styles/Purchase.module.css'
import Price from './Price';
import Button from '../../utils/Button'
import PurchaseLinks from './PurchaseLinks';

export default function PurchaseSummary() {
    return (
        <div className={styles.summaryCont}>

            <Price />
            <Button href='/' size='lg' color='purple'>Add to Cart</Button>
            <span className={styles.comment}>30-Day Money-Back Guarantee</span>
            <span className={styles.comment}>Full Lifetime Access</span>
            <PurchaseLinks />

        </div>
    )
}
