import React, { useContext } from 'react'
import { DetailedRating } from '../utils/RatingDescription'
import { SummaryContext } from '.';

export default function RatingDetails() {
    const summary = useContext(SummaryContext);

    return (
        <DetailedRating
            isBestSeller={summary.bestseller_badge_content}
            num_subscribers={summary.num_subscribers}
            rating={summary.rating}
            num_reviews={summary.num_reviews}
        />
    )
}
