"use client";
import SearchInput from "../../components/SearchInput";
import { Search } from "react-feather";
import RecentlyAddedContainer from "../../components/RecentlyAddedContainer";
import React, { useState } from "react";
import { useToken } from "../context/TokenContext";
import useSearch from "../../hooks/useSearch";
import FeaturedAlbumsCard from "../../components/FeaturedAlbumsCard";

export default function page() {
  const [inputValue, setInputValue] = useState("");
  const { token } = useToken();
  const { searchResults } = useSearch(inputValue, 300, token);

  if (!token) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex justify-center mt-20 flex-col items-center gap-5">
      <div className="bg-white w-1/2 h-[60px] flex items-center rounded relative">
        <div className="ml-3">
          <Search className="text-[#84A59D]" />
        </div>
        <div className="ml-3 h-full w-full">
          <input
            onChange={handleInputChange}
            className="w-full h-full rounded focus:outline-none"
            placeholder="Search For Albums"
          />
        </div>
      </div>
      <div className="w-1/2">
        <p>Current Search Results: {searchResults?.albums.items.length}</p>
      </div>
      <div className="bg-white w-full min-h-screen flex flex-wrap justify-center gap-4 p-10">
        {searchResults &&
          searchResults.albums.items.map((album) => {
            return (
              <>
                <FeaturedAlbumsCard
                  albumName={album.name}
                  artistName={album.artists[0].name}
                  albumImage={album.images[0].url}
                  id={album.id}
                  artistId={album.artists[0].id}
                />
              </>
            );
          })}
      </div>
    </div>
  );
}
