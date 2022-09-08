import React from 'react'
import { HoverCard } from '../utils/Card'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'
import styles from './styles/LinksList.module.css'

export default function LinksList() {
    return (
        <ul className={styles.linkLists}>
            <HoverCard
                title={<Link to="">Udemy Business</Link>}>
                <p>
                    Get your team access to over 16,000 top Udemy courses, anytime, anywhere.
                </p>
                <Button href='' color="black">Try Udemy Business</Button>
            </HoverCard>

            <HoverCard
                title={<Link to="">Teach on Udemy</Link>}>
                <p>
                    Turn what you know into an opportunity and reach millions around the world.
                </p>
                <Button href='' color="black">Learn more</Button>
            </HoverCard>

            <HoverCard
                title={<Link to=""><span className="material-symbols-outlined">shopping_cart</span></Link>}>
                <p>Your cart is empty.</p>
                <Link to="">Keep shopping</Link>
            </HoverCard>

        </ul>
    )
}
