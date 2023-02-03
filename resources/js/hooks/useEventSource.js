// create useEventSource hook to handle sse connection
import { useState, useEffect } from "react";

export function useEventSource(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const uri = new URL(url);
        uri.searchParams.append("topic", "https://example.com/users/dunglas");
        const eventSource = new EventSource(uri);
        eventSource.onmessage = (e) => {
            console.log('data',e.data);
            setData(JSON.parse(e.data));
        };
        eventSource.onerror = (e) => {
            setError(e);
        };
        return () => {
            eventSource.close();
        };
    }, []);
    return { data, error };
}
