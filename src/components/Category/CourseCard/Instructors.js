import React from 'react'

export default function Instructors({ instructors }) {
    return (
        <span>
            {
                instructors.map((e, i) => {
                    const s = (i !== instructors.length - 1) ? ', ' : '';
                    return e.display_name + s;
                })
            }
        </span>
    )
}
