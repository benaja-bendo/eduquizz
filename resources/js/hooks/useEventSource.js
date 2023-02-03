// create useEventSource hook to handle sse connection
import { useState, useEffect } from "react";

export function useEventSource({ mercureURL, topicURL }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const uri = new URL(mercureURL);
        uri.searchParams.append("topic", topicURL);
        const eventSource = new EventSource(uri);
        eventSource.onmessage = (e) => {
            console.log("data", e);
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
