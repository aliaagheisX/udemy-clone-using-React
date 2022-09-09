import React from 'react'
import Requirements from './Requirements'
import Description from './Description'
import ForWho from './ForWho'
import ShowMore from '../../ShowMore'
export default function CourseDetails() {
    return (
        <section>
            <ShowMore>
                <Requirements />
                <Description />
                <ForWho />
            </ShowMore>
        </section>
    )
}
