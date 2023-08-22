import React from "react";
import Image from "next/image";

export default function AlbumCover({ albumCover }: { albumCover: any }) {
  const AlbumCover = albumCover?.images?.[0]?.url || "";
  return (
    <div className=" mt-20 flex items-center justify-center w-full p-7">
      <Image src={AlbumCover} width={700} height={700} alt="image" />
    </div>
  );
}
