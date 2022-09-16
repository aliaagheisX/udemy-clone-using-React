import React from 'react'
import { HoverCard } from '../utils/Card'
import { Link } from 'react-router-dom'

export default function CategoriesNavBar() {
    return (
        <HoverCard type='hoverNav' title={<Link to="">Categories</Link>}>
            <ul>
                <li><Link to="">Development</Link></li>
                <li><Link to="">Business</Link></li>
                <li><Link to="">Finance & Accounting</Link></li>
                <li><Link to="">IT & Software</Link></li>
                <li><Link to="">Office Productivity</Link></li>
                <li><Link to="">Personal Development</Link></li>
                <li><Link to="">Desgin</Link></li>
                <li><Link to="">Marketing</Link></li>
                <li><Link to="">Lifestyle</Link></li>
                <li><Link to="">Photography & Video</Link></li>
                <li><Link to="">Health & Fitness</Link></li>
                <li><Link to="">Music</Link></li>
                <li><Link to="">Teaching & Academics</Link></li>
            </ul>
        </HoverCard>
    )
}
