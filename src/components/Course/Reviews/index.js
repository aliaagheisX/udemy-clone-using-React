import Result from './Result';
import React, { useContext } from 'react';
import { DetailsContext } from '..';
import StudentFeedBack from './StudentFeedBack';
import Form from './Form';
export default function Reviews() {
    const { review: { results } } = useContext(DetailsContext);

    return (
        <section id='reviews'>
            <StudentFeedBack />

            <div>
                <h3>Reviews</h3>
                <Form />
                {
                    results.map(({ id, ...data }) => (
                        <div key={id}>
                            <Result data={data} />
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
