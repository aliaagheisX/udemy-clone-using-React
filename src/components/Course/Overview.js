import React from 'react'
import { useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SummaryContext } from '.'
import styles from './styles/Overview.module.css'

export default function Overview() {

    const { objectives_summary } = useContext(SummaryContext);
    return (
        <section className={`card ${styles.container}`} id='overview'>
            <h3>What you'll learn</h3>
            <Row xs={1} sm={2}>
                {
                    objectives_summary.map((e, i) => (

                        <Col key={i} as='li' className={styles.point}>
                            <span className="material-symbols-outlined">
                                done
                            </span>
                            <span>
                                {e}
                            </span>
                        </Col>
                    ))
                }
            </Row>
        </section>
    )
}
