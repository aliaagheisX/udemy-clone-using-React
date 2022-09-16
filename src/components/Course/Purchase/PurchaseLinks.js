import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Purchase.module.css'
export default function PurchaseLinks() {
    return (
        <ul className={styles.links}>
            <li><Link to='/'>Share</Link></li>
            <li><Link to='/'>Gift this course</Link></li>
            <li><Link to='/'>Apply Coupon</Link></li>
        </ul>
    )
}
