import React from 'react'
import SideContainer from '../SideContainer'
import styles from './styles/SideNav.module.css'
import { HashLink as Link } from 'react-router-hash-link';

export default function SideNav({ summary }) {
    return (
        <nav className={`shadow ${styles.sideNav}`}>
            <SideContainer>
                <ul>
                    <li><Link smooth to='#overview' state={{ summary: summary }}>Overview</Link></li>
                    <li><Link smooth to='#curriculum' state={{ summary: summary }}>Curriculum</Link></li>
                    <li><Link smooth to='#instructor' state={{ summary: summary }}>Instructor</Link></li>
                    <li><Link smooth to='#reviews' state={{ summary: summary }}>Reviews</Link></li>
                </ul>
            </SideContainer>
        </nav>
    )
}
