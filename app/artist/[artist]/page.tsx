"use client";
import Link from "next/link";
import React from "react";
import useArtist from "../../../hooks/useArtist";
import { useToken } from "../../context/TokenContext";

export default function page({ params }: { params: any }) {
  const { token } = useToken();
  const { artist, artistAlbums } = useArtist(token, params.artist);
  const mostRecentAlbum = artistAlbums?.[0];

  const artistName = artist?.name;
  const artistImage = artist?.images?.[0].url;
  const artistGenres = artist?.genres;
  const artistPopularity = artist?.popularity;
  const artistFollowers = artist?.followers?.total;

  console.log(artist);
  console.log(artistAlbums);

  console.log(params);

  return (
    <div className="flex mt-10 flex-col gap-9">
      <div className="flex justify-center gap-9">
        <div className="flex flex-col text-white">
          <img src={artistImage} alt={artistName} className="rounded" />
          <h1>{artistName}</h1>
          <h2>Genres: {artistGenres}</h2>
          <h2>Popularity: {artistPopularity}</h2>
          <h2>Followers: {artistFollowers}</h2>
        </div>
        {/* Most Recent Album Section */}
        <div className="flex flex-col">
          <div>
            <h1 className="text-3xl underline text-white">Most Recent Album</h1>
          </div>
          <Link
            key={mostRecentAlbum?.id}
            href={`/albums/${mostRecentAlbum?.id}`}
          >
            <div className="mt-5 text-white">
              <img
                className="object-cover rounded"
                src={mostRecentAlbum?.images[0].url}
                alt={mostRecentAlbum?.name}
                width={300}
                height={300}
              />
              <div className="truncate">
                <h1>{mostRecentAlbum?.name}</h1>
                <h2>{mostRecentAlbum?.total_tracks}</h2>
                <h2>{mostRecentAlbum?.release_date}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-3xl underline text-white">All Albums</h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {/* Loop over the rest of the artist albums except the first one */}

        {artistAlbums?.slice(1).map((album: any) => (
          <Link key={album.id} href={`/albums/${album.id}`}>
            <div className="overflow-y-auto text-white">
              <img
                className="object-cover rounded"
                src={album.images[0].url}
                alt={album.name}
                width={300}
                height={300}
              />
              <div className="truncate w-1/2">
                <h1>{album.name}</h1>
                <h2>{album.total_tracks}</h2>
                <h2>{album.release_date}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
