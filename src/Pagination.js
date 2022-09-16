import React, { useState, useEffect } from 'react'
import WaitingPage from './Layouts/Waiting';
import Parser from './Parser'


export default function Pagination({ limit, path, render }) {
    const [firstLoading, setFirstLoading] = useState(1);
    const [isLoading, setIsLoading] = useState(0);
    const [nextLink, setNextLink] = useState(`${path}&_page=1&_limit=${limit}`);
    const [items, setItems] = useState([]);


    const loadNextItems = () => {
        /* start loading */
        setIsLoading(1);

        fetch(nextLink)
            .then(res => {
                const parsedHeaderLink = Parser(res.headers.get('link'));
                setNextLink(parsedHeaderLink.next);

                return res.json();
            })
            .then(data => {
                const newItems = items.slice();
                newItems.push(...data);

                setItems(newItems);
                setIsLoading(0);

                if (firstLoading) setFirstLoading(0);
            })
    }

    useEffect(() => {
        loadNextItems();
    }, [])

    if (firstLoading) return <WaitingPage />;
    return render({ items, paginationData: { nextLink, isLoading, loadNextItems } });
}
