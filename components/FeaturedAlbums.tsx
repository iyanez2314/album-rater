"use client";
import React from "react";
import FeaturedAlbumsCard from "./FeaturedAlbumsCard";

interface Props {
  recentlyAdded: any;
}

export default function FeaturedAlbums({ recentlyAdded }: Props) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center flex-col items-center">
        <div className="text-white font-semibold text-3xl mt-10">
          <h1>Featured Albums</h1>
        </div>
      </div>
      <div className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 ">
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
