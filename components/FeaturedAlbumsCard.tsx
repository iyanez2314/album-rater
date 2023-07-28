import React from "react";
import albumCover from "../public/brett-jordan-x3wDxZJx9qs-unsplash.jpg";
import Link from "next/link";
import Image from "next/image";

interface Props {
  albumName: string;
  artistName: string;
  albumImage: string;
  id: string;
}

export default function FeaturedAlbumsCard({
  albumName,
  artistName,
  albumImage,
  id,
}: Props) {
  return (
    <Link href={`/albums/${id}`}>
      <div className="relative h-[325px] w-[300px] mb-9">
        <Image src={albumImage} width={500} height={500} alt="image" />
        <div className="mx-2 my-2 p-2  text-white">
          <div className="flex justify-between">
            <p>*****</p>
            <h1>Messages</h1>
          </div>
          <div>
            <h1 className="font-semibold text-md">{albumName}</h1>
            <h2 className="w-full font-light text-sm underline cursor-pointer">
              {artistName}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
