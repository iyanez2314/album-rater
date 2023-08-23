"use client";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import useAlbum from "../../../hooks/useAlbum";
import { useToken } from "../../context/TokenContext";
import AlbumCover from "./components/AlbumCover";
import AlbumData from "./components/AlbumData";
import CommentSection from "./components/CommentSection";

interface Props {
  params: {
    album: string;
  };
}

export default function page({ params }: Props) {
  const { token } = useToken();
  const { album } = useAlbum(token, params.album);

  if (!token || !album) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <AlbumCover albumCover={album} />
      {/* Album Data Component */}
      <AlbumData albumData={album} />
      {/* Comment Section Component */}
      <CommentSection albumData={album} params={params} />
    </div>
  );
}
