'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';

interface Options {
  query?: Record<string, string>;
  params?: Record<string, any>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any; // body if needed (for POST)
}

export const useFetch = <T>(endpoint?: string, options: Options = {}) => {
  const [data, setData] = useState<T | null>(null); // Use 'any' or a specific type based on your data structure
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const baseOptions: Options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: '', // authorization token
    },
  };

  // Extract query parameters from options
  const { params, query, ...restOptions } = options;

  // Construct the full URL with query/params parameters
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  let url;

  if (params || query) {
    let appendedStrings = '';
    if (params) {
      const paramKeys = Object.keys(params);
      console.log({ paramKeys });
      if (paramKeys.length > 0) {
        appendedStrings += `/${paramKeys.map((key) => params[key]).join('/')}`; // append multiple params
      }
      console.log({ params: appendedStrings });
    } else if (query) {
      const queryString = `?${new URLSearchParams(query).toString()}`;
      appendedStrings = queryString;
      console.log({ query: appendedStrings });
    }
    url = `${baseUrl}${endpoint}${appendedStrings}`;
    console.log(url);
  } else {
    url = `${baseUrl}${endpoint}`;
    console.log(url);
  }

  // Memoize merged options to prevent unnecessary re-renders
  const mergedOptions = useMemo(
    () => ({ ...baseOptions, ...restOptions }),
    [baseOptions, restOptions]
  );

  const fetchData = useCallback(
    async (signal: AbortSignal) => {
      if (!endpoint) {
        setError('A valid endpoint is required.');
        return;
      }

      setError(null);
      setLoading(true);

      try {
        const response = await fetch(url, { ...mergedOptions, signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result: T = await response.json();
        setData(result);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [url, mergedOptions]
  );

  // Define refetch function
  const refetch = useCallback(() => {
    fetchData(new AbortController().signal); // Call fetchData with a new AbortController
  }, [fetchData]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController.signal);

    return () => {
      abortController.abort(); // Abort the fetch request on cleanup
    };
  }, []);

  return { data, error, loading, refetch };
};
