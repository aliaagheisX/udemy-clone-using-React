import React from 'react'
import SideContainer from '../SideContainer'
import styles from './styles/SideNav.module.css'
export default function SideNav() {
    return (
        <nav className={`shadow ${styles.sideNav}`}>
            <SideContainer>
                <ul>
                    <li><a href='#overview'>Overview</a></li>
                    <li><a href='#curriculum'>Curriculum</a></li>
                    <li><a href='#instructor'>Instructor</a></li>
                    <li><a href='#reviews'>Reviews</a></li>
                </ul>
            </SideContainer>
        </nav>
    )
}
