import React from 'react'

export default function BestSeller({ isBestSeller }) {
    const style = {
        backgroundColor: '#eceb98',
        color: '#3d3c0a',
        fontSize: '1.2rem',
        fontWeight: 'var(--medium-weight)',
        padding: '0.2rem 0.4rem'

    }
    return (
        isBestSeller && <span style={style}>Bestseller</span>
    )
}

