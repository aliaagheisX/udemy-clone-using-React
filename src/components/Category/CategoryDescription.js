import React from 'react'
import Button from '../utils/Button'

export default function CategoryDescription({ title, header, description }) {
    return (
        <div>
            <h3>{header}</h3>
            <p>{description}</p>

            <Button href='/'>{`Explore ${title.slice(15)}`}</Button>
        </div>
    )
}
