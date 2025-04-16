import { useEffect, useState } from "react";

// Simple in-memory cache
const cache = new Map();

const useFetchWithCache = (url, cacheKey) => {
  const [data, setData] = useState(() => cache.get(cacheKey) || null);
  const [loading, setLoading] = useState(!cache.has(cacheKey));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache.has(cacheKey)) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        cache.set(cacheKey, json);
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, cacheKey]);

  return { data, loading, error };
};

export default useFetchWithCache;
