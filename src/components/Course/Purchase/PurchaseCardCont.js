import React, { useContext } from "react";
import styles from './styles/Purchase.module.css'
import { Feauters } from '../../utils/Feauters';
import Sponsoring from '../../utils/Sponsoring';
import Price from './Price';
import Button from '../../utils/Button'
import PurchaseLinks from './PurchaseLinks';
import { SummaryContext } from '..';

export default function PurchaseCardCont() {
    const { content_info } = useContext(SummaryContext);
    return <div className={styles.purchase}>
        <Price />

        <Button href='/' size='lg' color='purple'>Add to Cart</Button>
        <Button href='/' size='lg'>Buy Now</Button>
        <span className={styles.comment}>30-Day Money-Back Guarantee</span>


        <Feauters content_info={content_info} />
        <PurchaseLinks />

        <hr />

        <Sponsoring />

    </div>;
}
