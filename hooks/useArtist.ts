"use client";

import { useEffect, useState } from "react";

interface SpotifyArtist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null | string;
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
}

interface SpotifyAlbumResponse {
  href: string;
  items: SpotifyAlbumItem[];
  limit: number;
  next: string;
  offset: number;
  previous: string | null;
  total: number;
}

interface SpotifyAlbumItem {
  album_group: string;
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

const useArtist = (token: string | null, artistId: string) => {
  const [artist, setArtist] = useState<SpotifyArtist | null>(null);
  const [artistAlbums, setArtistAlbums] = useState<SpotifyAlbumResponse | null>(
    null
  );

  useEffect(() => {
    const fetchArtist = async () => {
      if (token) {
        const url = `https://api.spotify.com/v1/artists/${artistId}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setArtist(data);
      }
    };
    fetchArtist();
  }, []);

  useEffect(() => {
    const fetchArtistAlbums = async () => {
      if (token) {
        const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setArtistAlbums(data);
      }
    };
    fetchArtistAlbums();
  }, []);

  return { artist, artistAlbums };
};

export default useArtist;
