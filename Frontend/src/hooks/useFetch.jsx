import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) {
            setLoading(false);
            return;
        }

        // Réinitialiser les états à chaque changement d'URL
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error("Erreur fetch:", err);
                setError(err.message || "Une erreur est survenue lors du chargement des données");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
}
