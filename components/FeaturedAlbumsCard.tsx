import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "react-feather";

interface Props {
  albumName: string;
  artistName: string;
  albumImage: string;
  id: string;
  albumRating: number;
  artistId?: string;
}

export default function FeaturedAlbumsCard({
  albumName,
  artistName,
  albumImage,
  albumRating,
  artistId,
  id,
}: Props) {
  return (
    <Link href={`/albums/${id}`}>
      <div className="relative h-[325px] w-[300px] mb-9">
        <Image
          src={albumImage}
          width={500}
          height={500}
          alt="image"
          className="rounded"
        />
        <div className="mx-2 my-2 p-2  text-white">
          <div>
            <h1 className="font-semibold text-md truncate">{albumName}</h1>
            <Link href={`artist/${artistId}`}>
              <h2 className="w-full font-light text-sm underline cursor-pointer">
                {artistName}
              </h2>
            </Link>
          </div>
          <div className="flex mt-2 justify-between">
            {albumRating <= 1 ? (
              <Star className="text-[#1DB954]" fill="currentColor" size={10} />
            ) : (
              [...Array(albumRating)].map((_, i) => (
                <Star
                  className="text-[#1DB954]"
                  fill="currentColor"
                  size={10}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
