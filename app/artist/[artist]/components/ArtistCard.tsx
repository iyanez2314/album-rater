import React from "react";

interface Props {
  artistName: string;
  artistImage: string | null;
  artistGenres: string[];
  artistPopularity: number;
  artistFollowers: number;
}

export default function ArtistCard({
  artistName,
  artistImage,
  artistGenres,
  artistPopularity,
  artistFollowers,
}: Props) {
  return (
    <div className="flex flex-col text-white text-center">
      <div className="p-7">
        <img src={artistImage || ""} alt={artistName} className="rounded" />
      </div>
      <h1 className="text-2xl">{artistName}</h1>
      <p className="text-sm font-light">Genres: {artistGenres?.join(", ")}</p>
      <p className="text-sm font-light">Popularity: {artistPopularity}</p>
      <p className="text-sm font-light">Followers: {artistFollowers}</p>
    </div>
  );
}
