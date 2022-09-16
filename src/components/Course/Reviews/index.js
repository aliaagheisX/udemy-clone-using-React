import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Result from './Result';
import StudentFeedBack from './StudentFeedBack';
import Form from './Form';
import ShowMore from './ShowMore';

export default function Reviews({ results, paginationData }) {
    const [searchParams] = useSearchParams();

    const filteredResults = () => (
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
                return Math.floor(rating) == filter;
            })
    )


    return (
        <section id='reviews'>
            <StudentFeedBack />

            <div>
                <h3>Reviews</h3>
                <Form />

                {filteredResults().map(({ id, ...data }) => (
                    <Result key={id} data={data} />
                ))}

                <ShowMore paginationData={paginationData} />
            </div>

        </section>
    )
}
