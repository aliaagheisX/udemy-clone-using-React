import React, { useContext } from 'react';

import styles from './styles/Purchase.module.css'

import Button from '../../utils/Button'
import { Feauters } from '../../utils/Feauters';
import Sponsoring from '../../utils/Sponsoring';
import { SummaryContext } from '..';
import Price from './Price';
import Video from '../Video';

const PurchaseLinks = () => (<ul className={styles.links}>
    <li><a href='/'>Share</a></li>
    <li><a href='/'>Gift this course</a></li>
    <li><a href='/'>Apply Coupon</a></li>
</ul>)


const Purchase = () => {
    const {
        content_info,
    } = useContext(SummaryContext);
    return (
        <div>
            <Video />
            <div
                className={`shadow ${styles.purchase} d-none d-lg-block`}>
                <Price />

                <Button href='/' size='lg' color='purple'>Add to Cart</Button>
                <Button href='/' size='lg'>Buy Now</Button>
                <span className={styles.comment}>30-Day Money-Back Guarantee</span>


                <Feauters content_info={content_info} />
                <PurchaseLinks />

                <hr />

                <Sponsoring />
            </div>

        </div>

    );
}
export default Purchase;

export function PurchaseSummary() {
    return (
        <div>
            <Price />
            <Button href='/' size='lg' color='purple'>Add to Cart</Button>
            <span className={styles.comment}>30-Day Money-Back Guarantee</span>
            <span className={styles.comment}>Full Lifetime Access</span>
            <PurchaseLinks />

        </div>
    )
}


