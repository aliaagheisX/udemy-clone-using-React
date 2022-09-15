import React from 'react';
import styles from './styles/CourseHeader.module.css'

import TopicMenu from './TopicMenu';

import CourseOverview from './CourseOverview'
import Video from '../Video';
import Purchase from '../Purchase/Purchase';
import PurchaseSummary from '../Purchase/PurchaseSummary';


export default function CourseHeader() {
    return (

        <div className={styles.courseHeader}>
            <div className='myContainer'>
                <div>
                    <TopicMenu />
                    <div className='d-lg-none'>
                        <Video />
                    </div>

                    <CourseOverview />
                    <div className='d-lg-none'>
                        <PurchaseSummary />
                    </div>
                </div>
                <div className='d-none d-lg-block side'>
                    <Purchase />
                </div>
            </div>
        </div>
    )
}