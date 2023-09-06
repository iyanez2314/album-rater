"use client";
import React from "react";
import FeaturedAlbumsCard from "./FeaturedAlbumsCard";

interface Props {
  recentlyAdded: any;
}

export default function FeaturedAlbums({ recentlyAdded }: Props) {
  return (
    <div className="flex mt-20 justify-center items-center flex-col bg-white">
      <div className="flex justify-center flex-col items-center">
        <div className="text-[#84A59D] font-semibold text-4xl mt-10">
          <h1>Featured Albums</h1>
        </div>
      </div>
      <div className="p-10 items-center pl-0 pr-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 ">
        {recentlyAdded.map((album: any) => {
          return (
            <FeaturedAlbumsCard
              key={album.id}
              id={album.id}
              artistId={album.artists[0].id}
              albumRating={album.rating}
              albumName={album.name}
              artistName={album.artists[0].name}
              albumImage={album.images[0].url}
            />
          );
        })}
      </div>
    </div>
  );
}
