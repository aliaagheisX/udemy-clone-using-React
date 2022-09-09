import React from 'react';
import Video from '../Video';
import StickyCard from '../../utils/StickyCard'
import PurchaseCardCont from './PurchaseCardCont';
import styles from './styles/Purchase.module.css'


export default function Purchase() {
    return (
        <div className={styles.cont}>

            <Video />

            <StickyCard>
                <PurchaseCardCont />
            </StickyCard>

        </div>

    );
}
