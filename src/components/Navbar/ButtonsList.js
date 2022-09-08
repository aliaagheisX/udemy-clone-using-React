import React from 'react'
import Button from '../utils/Button'
export default function ButtonsList() {
    return (
        <ul>
            <li>
                <Button href="">
                    Log in
                </Button>
            </li>
            <li>
                <Button color="black" href="">
                    Sign up
                </Button>
            </li>
            <li>
                <Button size="sm" href="">
                    <span className='material-symbols-outlined'>language</span>
                </Button>
            </li>
        </ul>
    )
}
