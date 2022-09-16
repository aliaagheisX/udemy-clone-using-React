import React, { useContext } from 'react'
import { SummaryContext } from '..'
import styles from './styles/Updates.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Updates() {
    const {
        last_update_date: date,
        locale: { simple_english_title: language },
        caption_languages: captions,

    } = useContext(SummaryContext);
    const [year, month] = date.split('-');

    return (
        <Row xs={1} md={'auto'} className={styles.updates}>
            <Col>
                <span className="material-symbols-outlined"> new_releases </span>
                <span> Last updated {month}/{year} </span>
            </Col>
            <Col>
                <span className="material-symbols-outlined"> language </span>
                <span>{language}</span>
            </Col>
            <Col>
                <span className="material-symbols-outlined"> closed_caption </span>
                <span>{captions.slice(0, 2).join(', ')}</span>
                {/*TODO: enhance to complete list*/}
            </Col>
        </Row>
    )
}
