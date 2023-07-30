"use client";
import { useState, useEffect } from "react";
import FeaturedAlbums from "../components/FeaturedAlbums";
import RecentlyAddedContainer from "../components/RecentlyAddedContainer";
import cache from "memory-cache";

export default function Home() {
  const [recentlyAdded, setRecentlyAdded] = useState([]);

  const fetchRecentlyAdded = async () => {
    const cacheKey = process.env.CACHE_KEY;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      setRecentlyAdded(cachedData);
      return;
    } else {
      // TODO: I need to make a custom hoook that will pass in the token to it and make the fetch request
      const response = await fetch("/api/fetchRecentlyAddedAlbums");
      const data = await response.json();
      const allAlbums = data.albums.items;
      const filteredAlbums = allAlbums.filter((album: any) => {
        return album.album_type === "album";
      });
      setRecentlyAdded(filteredAlbums);
      cache.put(cacheKey, filteredAlbums, 1000 * 60 * 60 * 24);
    }
  };

  useEffect(() => {
    fetchRecentlyAdded();
  }, []);

  return (
    <>
      <RecentlyAddedContainer recentlyAdded={recentlyAdded} />
      <hr className="mt-20 border-[#1DB954]" />
      <FeaturedAlbums recentlyAdded={recentlyAdded} />
    </>
  );
}
