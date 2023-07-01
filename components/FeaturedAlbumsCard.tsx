import React from "react";
import albumCover from "../public/brett-jordan-x3wDxZJx9qs-unsplash.jpg";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedAlbumsCard() {
  return (
    <Link href={`/albums/dog`}>
      <div className="relative h-[325px] w-[300px]">
        <Image src={albumCover} width={500} height={500} alt="image" />
        <div className="mx-2 my-2 p-2 text-white">
          <div className="flex justify-between">
            <p>*****</p>
            <h1>Messages</h1>
          </div>
          <h1 className="font-semibold text-md">Album title</h1>
          <h2 className="w-1/2 font-light text-sm underline cursor-pointer">
            Artist
          </h2>
        </div>
        <button className="absolute top-0 bg-red-500 z-1 mx-2">Heart</button>
      </div>
    </Link>
  );
}
