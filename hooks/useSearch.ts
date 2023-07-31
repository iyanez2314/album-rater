"use client";
import { useState, useEffect } from "react";
const useSearch = (search: string, delay: number, token: string | null) => {
  const [searchResults, setSearchResults] = useState([]);
  if (!token) {
    throw new Error("No token provided");
  }

  useEffect(() => {
    if (!search) {
      setSearchResults([]);
      return;
    }
    const timeout = setTimeout(async () => {
      const resp = await fetch(
        `https://api.spotify.com/v1/search?q=${search}&type=artist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await resp.json();
      setSearchResults(data);
    }, delay);
    return () => clearTimeout(timeout);
  }, [search, token]);

  return { searchResults };
};

export default useSearch;
