import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "react-feather";

interface Props {
  albumName: string;
  artistName: string;
  albumImage: string;
  id: string;
  artistId?: string;
}

export default function FeaturedAlbumsCard({
  albumName,
  artistName,
  albumImage,
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
        <div className="mx-2 my-2 p-2  text-[#84A59D]">
          <div>
            <h1 className="font-semibold text-md truncate">{albumName}</h1>
            <Link href={`artist/${artistId}`}>
              <h2 className="w-full font-light text-sm underline cursor-pointer">
                {artistName}
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
