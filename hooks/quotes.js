import { useEffect, useState } from "react";
import axios from 'axios';

export function useRandomQuote(apiUrl) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [apiUrl]);

    const randomQuote = data[Math.floor(Math.random() * data.length)];
    return { loading, error, data: randomQuote }
}