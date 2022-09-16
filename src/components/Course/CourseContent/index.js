import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Overview from './Overview';

import { DetailsContext } from '..';
import styles from './styles/index.module.css'
import Content from './Content';
import Title from './Title';
export default function CourseContent() {
    const {
        curriculum_context: {
            data: {
                sections,
            }
        }
    } = useContext(DetailsContext)
    return (
        <section id='curriculum'>
            <h3 className={styles.heading}>Course content</h3>
            <Overview />


            <Accordion alwaysOpen>
                {
                    sections.map(({ index, items, ...data }) => (
                        <Accordion.Item eventKey={index} key={index}>
                            <Title data={data} />

                            <Accordion.Body>
                                {
                                    items.map(({ id, ...data }) => (
                                        <Content key={id} data={data} id={id} />


                                    ))
                                }
                            </Accordion.Body>


                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </section>
    )
}
