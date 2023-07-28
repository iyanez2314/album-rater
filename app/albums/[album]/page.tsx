"use client";
import { useEffect, useState } from "react";
import AlbumCover from "./components/AlbumCover";
import AlbumData from "./components/AlbumData";
import CommentSection from "./components/CommentSection";

interface Props {
  params: {
    album: string;
  };
}

export default function page({ params }: Props) {
  const [album, setAlbum] = useState([]);
  const [albumCover, setAlbumCover] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAlbum = async () => {
    setLoading(true);
    const response = await fetch("/api/fetchAlbum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        albumId: params.album,
      }),
    });

    const data = await response.json();
    setAlbum(data);
    setAlbumCover(data.images[0].url);
    setLoading(false);
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Album Cover */}
      <AlbumCover albumCover={albumCover} />
      {/* Album Data Component */}
      <AlbumData albumData={album} />
      {/* Comment Section Component */}
      <CommentSection albumData={album} params={params} />
    </div>
  );
}
