import React from 'react'

export default function CarsoulBtn({ display, behaviour, btnClickHandel }) {

    return (
        display && (<span className='circle' onClick={() => btnClickHandel(behaviour)}>
            <span className='material-symbols-outlined'>
                {`navigate_${behaviour}`}
            </span>
        </span>
        )
    )
}
