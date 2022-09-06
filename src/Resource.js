import { useState, useEffect } from 'react'

export default function Resource({ path, render }) {
    const [error, setError] = useState(null);
    const [loading, setLoadeding] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(path)
            .then(res => res.json())
            .then(
                (result) => {
                    setLoadeding(false);
                    setItems(result);
                },
                (error) => {
                    setLoadeding(false);
                    setError(error);
                }
            )
    }, [])



    return render({ loading, items, error });
}
