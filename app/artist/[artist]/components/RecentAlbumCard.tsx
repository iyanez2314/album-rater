import Link from "next/link";
import React from "react";

export default function RecentAlbumCard({
  mostRecentAlbum,
}: {
  mostRecentAlbum: any;
}) {
  return (
    <>
      <Link key={mostRecentAlbum?.id} href={`/albums/${mostRecentAlbum?.id}`}>
        <div className="mt-5 text-white">
          <img
            className="object-cover rounded"
            src={mostRecentAlbum?.images[0].url}
            alt={mostRecentAlbum?.name}
            width={300}
            height={300}
          />
          <div className="truncate text-center mt-2">
            <h1 className="text-lg font-semibold">{mostRecentAlbum?.name}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}
