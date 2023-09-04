"use client";
import { useState, useEffect } from "react";

interface SpotifySearchAlbumResponse {
  albums: {
    href: string;
    items: SpotifyAlbumSearchItem[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
  };
}

// Individual album object
interface SpotifyAlbumSearchItem {
  album_type: string;
  artists: Array<{
    // Define fields of individual artists here if needed.
    // For now, using any as placeholder.
    [key: string]: any;
  }>;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<{
    height: number;
    url: string;
    width: number;
  }>;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

const useSearch = (search: string, delay: number, token: string | null) => {
  const [searchResults, setSearchResults] =
    useState<SpotifySearchAlbumResponse | null>(null);
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
        `https://api.spotify.com/v1/search?q=${search}&type=album`,
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
