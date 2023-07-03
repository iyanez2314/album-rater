import React from "react";
import Image from "next/image";

interface Props {
  albumCover: string;
}

export default function AlbumCover({ albumCover }: Props) {
  return (
    <div className=" flex items-center justify-center w-full p-7">
      <Image src={albumCover} width={700} height={700} alt="image" />
    </div>
  );
}
