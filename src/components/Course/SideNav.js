import React from 'react'
import SideContainer from '../SideContainer'
import styles from './styles/SideNav.module.css'
import { HashLink as Link } from 'react-router-hash-link';

export default function SideNav() {
    return (
        <nav className={`shadow ${styles.sideNav}`}>
            <SideContainer>
                <ul>
                    <li><Link smooth to='#overview'>Overview</Link></li>
                    <li><Link smooth to='#curriculum'>Curriculum</Link></li>
                    <li><Link smooth to='#instructor'>Instructor</Link></li>
                    <li><Link smooth to='#reviews'>Reviews</Link></li>
                </ul>
            </SideContainer>
        </nav>
    )
}
