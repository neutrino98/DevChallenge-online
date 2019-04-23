import React, { useState, useEffect} from 'react'

export function useFetch (url: string) {
    const [data, setData] = useState(null);
    useEffect(() => {
      (async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      })();
    }, [url]);
    return data;
  }