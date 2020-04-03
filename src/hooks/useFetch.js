import { useState, useCallback } from "react";

const useFetch = uri => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setIsFetching(true);
      const response = await fetch(uri);
      const result = await response.json();
      if (result) {
        setData({
          result
        });
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  }, [setIsFetching, uri, setError]);

  return {
    isFetching,
    data,
    error,
    fetchData
  };
};

export default useFetch;
