"use client";

import { useEffect, useState } from "react";

const useArtist = (token: string | null, artistId: string) => {
  const [artist, setArtist] = useState({});
  const [artistAlbums, setArtistAlbums] = useState([]);

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
        setArtistAlbums(data.items);
      }
    };
    fetchArtistAlbums();
  }, []);

  return { artist, artistAlbums };
};

export default useArtist;
