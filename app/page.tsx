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
      <div className="absolute top-0 items-center left-0 h-full w-40 flex flex-col bg-black rounded space-y-60">
        <div className="mt-4">
          <h1 className="text-4xl font-bold text-white">Logo</h1>
        </div>
        <div className="w-40">
          <nav className="flex flex-col items-center justify-center">
            <ul className="flex flex-col justify-center items-center">
              <li className="text-white hover:cursor-pointer p-6">Discover</li>
              <li className="text-white hover:cursor-pointer p-6">Search</li>
              <li className="text-white hover:cursor-pointer p-6">Profile</li>
              <li className="text-white hover:cursor-pointer p-6 ">Settings</li>
            </ul>
          </nav>
        </div>
      </div>
      <RecentlyAddedContainer recentlyAdded={featuredAlbums} />
      <hr className="mt-20 border-[#1DB954]" />
      <FeaturedAlbums recentlyAdded={featuredAlbums} />
    </>
  );
}
