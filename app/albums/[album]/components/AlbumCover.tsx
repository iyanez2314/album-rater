import React from "react";
import Image from "next/image";

export default function AlbumCover({ albumCover }: { albumCover: any }) {
  console.log("albumCover", albumCover);
  const AlbumCover = albumCover?.images?.[0]?.url || "";
  console.log("AlbumCover", AlbumCover);
  return (
    <div className=" flex items-center justify-center w-full p-7">
      <Image src={AlbumCover} width={700} height={700} alt="image" />
    </div>
  );
}
