import React from "react";
import FeaturedAlbumsCard from "./FeaturedAlbumsCard";

export default function FeaturedAlbums() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center flex-col items-center">
        <div className="text-white font-semibold text-3xl mt-10">
          <h1>Featured Albums</h1>
        </div>
      </div>
      <div className="p-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 ">
        <FeaturedAlbumsCard />
        <FeaturedAlbumsCard />
        <FeaturedAlbumsCard />
        <FeaturedAlbumsCard />
      </div>
    </div>
  );
}