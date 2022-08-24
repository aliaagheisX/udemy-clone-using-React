import React from 'react'

export default function CarsoulBtn(props) {

    return (
        <span className='circle' onClick={() => props.btnClickHandel(props.behaviour)}>
            <span className='material-symbols-outlined'>
                {`navigate_${props.behaviour}`}
            </span>
        </span>
    )
}
