import React from "react";
import Image from "next/image";
import albumCover from "/public/brett-jordan-x3wDxZJx9qs-unsplash.jpg";

export default function AlbumCover() {
  return (
    <div className=" flex items-center justify-center w-full p-7">
      <Image src={albumCover} width={700} height={700} alt="image" />
    </div>
  );
}
