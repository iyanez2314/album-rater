"use client";
import { useState, useEffect } from "react";
import FeaturedAlbums from "../components/FeaturedAlbums";
import RecentlyAddedContainer from "../components/RecentlyAddedContainer";

export default function Home() {
  const [recentlyAdded, setRecentlyAdded] = useState([]);

  const fetchRecentlyAdded = async () => {
    const response = await fetch("/api/fetchRecentlyAddedAlbums");
    const data = await response.json();
    const allAlbums = data.albums.items;
    const filteredAlbums = allAlbums.filter((album: any) => {
      return album.album_type === "album";
    });
    setRecentlyAdded(filteredAlbums);
  };

  useEffect(() => {
    fetchRecentlyAdded();
  }, []);

  return (
    <>
      <RecentlyAddedContainer />
      <hr className="mt-20 border-[#1DB954]" />
      <FeaturedAlbums />
    </>
  );
}
