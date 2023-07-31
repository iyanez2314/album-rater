"use client";
import { useState, useEffect, useContext } from "react";
import FeaturedAlbums from "../components/FeaturedAlbums";
import RecentlyAddedContainer from "../components/RecentlyAddedContainer";
import cache from "memory-cache";
import useFeaturedAlbums from "../hooks/useFeaturedAlbums";
import { useToken } from "./context/TokenContext";
import { fetchToken } from "../util/fetchToken";

export default function Home() {
  const { token } = useToken(); // Grabs the token from the context
  const { featuredAlbums } = useFeaturedAlbums(token);
  if (!token || !featuredAlbums) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <RecentlyAddedContainer recentlyAdded={featuredAlbums} />
      <hr className="mt-20 border-[#1DB954]" />
      <FeaturedAlbums recentlyAdded={featuredAlbums} />
    </>
  );
}
