import Result from './Result';
import React, { useContext } from 'react';
import { DetailsContext } from '..';
import StudentFeedBack from './StudentFeedBack';
import Form from './Form';
import { useSearchParams } from 'react-router-dom';
export default function Reviews() {
    const { review: { results } } = useContext(DetailsContext);
    const [searchParams] = useSearchParams();

    return (
        <section id='reviews'>
            <StudentFeedBack />

            <div>
                <h3>Reviews</h3>
                <Form />
                {
                    results
                        .filter(({ content }) => {
                            const filter = searchParams.get('review');
                            if (!filter) return true;
                            const name = content.toLowerCase();
                            return name.includes(filter.toLowerCase());

                        })
                        .filter(({ rating }) => {
                            const filter = searchParams.get('rating');
                            if (!filter) return true;
                            return rating == filter;

                        })
                        .map(({ id, ...data }) => (
                            <div key={id}>
                                <Result data={data} />
                            </div>
                        ))
                }
            </div>

        </section>
    )
}
