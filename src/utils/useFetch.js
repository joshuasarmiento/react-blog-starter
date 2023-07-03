import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error("Failed to fetch blogs");
                }
                return response.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsLoading(false);
                setError(error);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });

    }, [url, error])

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch;