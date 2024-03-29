"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  recentlyAdded: any;
}

export default function RecentlyAddedContainer({ recentlyAdded }: Props) {
  const images = recentlyAdded[0]?.images[0].url || [];
  const artistName = recentlyAdded[0]?.artists[0].name || "";
  const albumName = recentlyAdded[0]?.name || "";
  const albumId = recentlyAdded[0]?.id || "";
  return (
    <div className=" flex justify-center px-10 mt-10 z-[-10]">
      <Link href={`/albums/${albumId}`}>
        <section className="relative min-w-fit rounded-3xl space-y-2 text-[#84A59D]">
          <div className="min-h-56 flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full opacity-10 p-10">
              <Image
                alt={albumName}
                fill
                className="object-cover object-center mx-auto rounded"
                src={images}
              />
            </div>
          </div>
          <section className="flex justify-center items-center w-full">
            <div className="flex w-full flex-col justify-center sm:justify-evenly md:flex-row items-center px-20 gap-x-20">
              <div className="text-center">
                <h1 className="text-4xl font-semibold"> Recently Added </h1>
              </div>
              <div className="w-full mt-4 flex justify-evenly gap-3 flex-row p-4 sm:flex-col items-center">
                <Image
                  alt={albumName}
                  width={175}
                  height={175}
                  className="mx-auto object-contain object-center rounded"
                  src={images}
                />
                <div className="mt-0 w-full text-center">
                  <h1 className="text-2xl">{albumName}</h1>
                  <p className="text-sm underline">{artistName}</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Link>
    </div>
  );
}
