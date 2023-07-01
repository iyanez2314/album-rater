import React from "react";
import albumCover from "../public/brett-jordan-x3wDxZJx9qs-unsplash.jpg";
import Link from "next/link";
import Image from "next/image";
export default function FeaturedAlbums() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center flex-col items-center">
          <div className="text-white font-semibold text-3xl mt-10">
            <h1>Featured Albums</h1>
          </div>
        </div>
        <div className="p-20 bg-red-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 ">
          <div className="bg-blue-200 h-[300px] w-[300px]">
            <Image src={albumCover} width={500} height={500} alt="image" />
            <h1>Album title</h1>
            <h2>Artist</h2>
          </div>
          <div className="bg-blue-200 h-[300px] w-[300px]">
            <Image src={albumCover} width={500} height={500} alt="image" />
            <h1>Album title</h1>
            <h2>Artist</h2>
          </div>
          <div className="bg-blue-200 h-[300px] w-[300px]">
            <Image src={albumCover} width={500} height={500} alt="image" />
            <h1>Album title</h1>
            <h2>Artist</h2>
          </div>
          <div className="bg-blue-200 h-[300px] w-[300px]">
            <Image src={albumCover} width={500} height={500} alt="image" />
            <h1>Album title</h1>
            <h2>Artist</h2>
          </div>
          <div className="bg-blue-200 h-[300px] w-[300px]">
            <Image src={albumCover} width={500} height={500} alt="image" />
            <h1>Album title</h1>
            <h2>Artist</h2>
          </div>
          <div className="bg-blue-200 h-[300px] w-[300px]">
            <Image src={albumCover} width={500} height={500} alt="image" />
            <h1>Album title</h1>
            <h2>Artist</h2>
          </div>
          <div className="bg-blue-200 h-[300px] w-[300px]">
            <Image src={albumCover} width={500} height={500} alt="image" />
            <h1>Album title</h1>
            <h2>Artist</h2>
          </div>
        </div>
      </div>
    </>
  );
}
