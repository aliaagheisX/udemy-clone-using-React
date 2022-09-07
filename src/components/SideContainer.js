import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function SideContainer({ children }) {
    return (
        <Container className='myContainer' style={{ display: 'block', padding: '0' }}>
            <Row>
                <Col xs={12} lg={8} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingRight: '3rem'
                }}>

                    {children}
                </Col>
            </Row>
        </Container>
    )
}
