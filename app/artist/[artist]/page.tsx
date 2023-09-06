"use client";
import Link from "next/link";
import React from "react";
import FeaturedAlbumsCard from "../../../components/FeaturedAlbumsCard";
import useArtist from "../../../hooks/useArtist";
import { useToken } from "../../context/TokenContext";
import ArtistCard from "./components/ArtistCard";
import RecentAlbumCard from "./components/RecentAlbumCard";

export default function page({ params }: { params: any }) {
  const { token } = useToken();
  const { artist, artistAlbums } = useArtist(token, params.artist);
  const mostRecentAlbum = artistAlbums?.items[0];

  const artistName = artist?.name || "";
  const artistImage = artist?.images?.[0].url || "";
  const artistGenres = artist?.genres || [];
  const artistPopularity = artist?.popularity || 0;
  const artistFollowers = artist?.followers?.total || 0;
  return (
    <div className="flex mt-10 flex-col gap-9 items-center">
      <div className="flex justify-center gap-9  w-full flex-wrap">
        <ArtistCard
          artistName={artistName}
          artistImage={artistImage}
          artistGenres={artistGenres}
          artistPopularity={artistPopularity}
          artistFollowers={artistFollowers}
        />
        {/* Most Recent Album Section */}
        <div className="flex flex-col">
          <div className="text-center">
            <h1 className="text-3xl underline text-white">Most Recent Album</h1>
          </div>
          <RecentAlbumCard mostRecentAlbum={mostRecentAlbum} />
        </div>
      </div>
      <hr className="mt-10 border-[#1DB954] w-full" />
      <div className="my-3 w-full flex justify-center items-center">
        <h1 className="text-3xl underline text-white">All Albums</h1>
      </div>
      <div className="grid grid-cols-1 p-10 my-5 mx-3 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {artistAlbums?.items.slice(1).map((album: any) => (
          <FeaturedAlbumsCard
            key={album.id}
            id={album.id}
            albumName={album.name}
            artistName={artistName}
            albumImage={album.images[0].url}
          />
        ))}
      </div>
    </div>
  );
}
