import React from 'react'
import { Link } from 'react-router-dom'


export default function CourseName({ data }) {
    const styles = {
        fontWeight: 'var(--bold-weight)',
        fontSize: 'var(--large-font)'
    }
    return (
        <h4 style={styles}>
            <Link to={`course/${data.id}`} state={{ summary: data }}>
                {data.title}
            </Link>
        </h4>
    )
}
