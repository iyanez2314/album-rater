"use client";
import { useState, useEffect } from "react";

interface SpotifySearchArtistResponse {
  artists: {
    href: string;
    items: SpotifyArtistSearchItem[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
  };
}

interface SpotifyArtistSearchItem {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

const useSearch = (search: string, delay: number, token: string | null) => {
  const [searchResults, setSearchResults] =
    useState<SpotifySearchArtistResponse | null>(null);
  if (!token) {
    throw new Error("No token provided");
  }

  useEffect(() => {
    if (!search) {
      setSearchResults(null);
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
      console.log(data);
      setSearchResults(data);
    }, delay);
    return () => clearTimeout(timeout);
  }, [search, token]);

  return { searchResults };
};

export default useSearch;
