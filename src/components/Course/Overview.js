import React from 'react'
import { useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SummaryContext } from './Course'
export default function Overview() {

    const { objectives_summary } = useContext(SummaryContext);
    return (
        <section className='card' style={{ padding: '2rem', marginTop: '3rem' }} id='overview'>
            <h3>What you'll learn</h3>
            <Row xs={1} sm={2}>
                {
                    objectives_summary.map((e, i) => (

                        <Col key={i} as='li'>
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
