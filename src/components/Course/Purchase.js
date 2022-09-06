import React, { useState, useEffect } from 'react';

import styles from './styles/Purchase.module.css'
import Button from '../utils/Button'
import { Feauters } from '../utils/Feauters';
import Sponsoring from '../utils/Sponsoring';

const PurchaseLinks = <ul className={styles.links}>
    <li><a href='/'>Share</a></li>
    <li><a href='/'>Gift this course</a></li>
    <li><a href='/'>Apply Coupon</a></li>
</ul>;


export default function Purchase({ defaultWidth, defaultPosition, discount, price, content_info }) {

    const [isSticky, setisSticky] = useState(0);
    const handleScroll = () => {
        setisSticky(window.pageYOffset >= defaultPosition);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div
            className={`shadow ${styles.purchase} d-none d-lg-block`}
            style={{
                position: isSticky ? 'fixed' : 'absolute',
                top: isSticky ? '20px' : 'auto',
                width: defaultWidth
            }}
        >
            {Price(discount, price)}

            <Button href='/' size='lg' color='purple'>Add to Cart</Button>
            <Button href='/' size='lg'>Buy Now</Button>
            <span className={styles.comment}>30-Day Money-Back Guarantee</span>


            {Feauters(content_info)}
            {PurchaseLinks}

            <hr />

            <Sponsoring />
        </div>



    );
}

export function PurchaseSummary() {
    return (
        <div>Purchase</div>
    )
}




function Price(discount, price) {
    return <div className={styles.price}>
        <h3 className={styles.currPrice}>{discount.price_string}</h3>

        <span className={styles.prevPrice}>{price.price_string}</span>
        <span className={styles.precent}>
            {(discount.amount / price.amount * 100).toPrecision(3)}% off
        </span>
    </div>;
}



