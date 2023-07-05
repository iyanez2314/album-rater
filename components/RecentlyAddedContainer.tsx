"use client";
import React from "react";
import Image from "next/image";
interface Props {
  recentlyAdded: any;
}

export default function RecentlyAddedContainer({ recentlyAdded }: Props) {
  const images = recentlyAdded[0]?.images[0].url || [];
  const artistName = recentlyAdded[0]?.artists[0].name || "";
  const albumName = recentlyAdded[0]?.name || "";
  return (
    <div className=" flex justify-center px-10 pt-28">
      <section className="relative min-w-fit rounded-3xl space-y-2 text-white">
        <div className="min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 p-10">
            <Image
              alt={albumName}
              fill
              className="object-cover object-center mx-auto"
              src={images}
            />
          </div>
        </div>
        <section className="p-5 w-full">
          <div className=" flex flex-col md:flex-row justify-evenly px-20 gap-x-20">
            <div className="">
              <h1 className="text-4xl font-semibold"> Recently Added </h1>
            </div>
            <div className="h-[150px]  mt-4 flex justify-center flex-col p-4 ml-20">
              <Image
                alt={albumName}
                width={175}
                height={175}
                className="mx-auto"
                src={images}
              />
              <h6 className="font-semisbold">{albumName}</h6>
              <p className="font-light">{artistName}</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
