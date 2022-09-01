import React from 'react'

export default function CarsoulBtn({ behaviour, btnClickHandel }) {

    return (
        <span className='circle' onClick={() => btnClickHandel(behaviour)}>
            <span className='material-symbols-outlined'>
                {`navigate_${behaviour}`}
            </span>
        </span>
    )
}
