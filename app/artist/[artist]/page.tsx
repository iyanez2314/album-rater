"use client";
import Link from "next/link";
import React from "react";
import useArtist from "../../../hooks/useArtist";
import { useToken } from "../../context/TokenContext";

export default function page({ params }: { params: any }) {
  const { token } = useToken();
  const { artist, artistAlbums } = useArtist(token, params.artist);
  const mostRecentAlbum = artistAlbums?.items[0];

  const artistName = artist?.name;
  const artistImage = artist?.images?.[0].url;
  const artistGenres = artist?.genres;
  const artistPopularity = artist?.popularity;
  const artistFollowers = artist?.followers?.total;

  return (
    <div className="flex mt-10 flex-col gap-9">
      <div className="flex justify-center gap-9  w-full flex-wrap">
        <div className="flex flex-col text-white text-center">
          <img src={artistImage} alt={artistName} className="rounded" />
          <h1>{artistName}</h1>
          <h2>Genres: {artistGenres}</h2>
          <h2>Popularity: {artistPopularity}</h2>
          <h2>Followers: {artistFollowers}</h2>
        </div>
        {/* Most Recent Album Section */}
        <div className="flex flex-col">
          <div className="text-center">
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
              <div className="truncate text-center">
                <h1>{mostRecentAlbum?.name}</h1>
                <h2>{mostRecentAlbum?.total_tracks}</h2>
                <h2>{mostRecentAlbum?.release_date}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <hr className="mt-10 border-[#1DB954]" />

      <div className="my-3 w-full flex justify-center items-center">
        <h1 className="text-3xl underline text-white">All Albums</h1>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {artistAlbums?.items.slice(1).map((album: any) => (
          <Link key={album.id} href={`/albums/${album.id}`}>
            <div className="overflow-y-auto text-white flex flex-col items-center">
              <img
                className="object-cover rounded"
                src={album.images[0].url}
                alt={album.name}
                width={300}
                height={300}
              />
              <div className=" w-full text-center p-2">
                <h1 className="truncate">{album.name}</h1>
                <h2>Total Tracks: {album.total_tracks}</h2>
                <h2>Release Date: {album.release_date}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
