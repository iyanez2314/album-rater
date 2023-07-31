"use client";
import { useEffect, useState } from "react";
const useFeaturedAlbums = (token: string | null) => {
  const [featuredAlbums, setFeaturedAlbums] = useState([]);

  useEffect(() => {
    const fetchFeaturedAlbums = async () => {
      if (token) {
        const url = "https://api.spotify.com/v1/browse/new-releases";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setFeaturedAlbums(data.albums.items);
      }
    };
    fetchFeaturedAlbums();
  }, []);

  return { featuredAlbums };
};

export default useFeaturedAlbums;
