"use client";

import { useState } from "react";

interface CreateCommentsArguments {
  albumTitle: string;
  albumId: string;
  userId: string | number;
  title: string;
  rating: string;
  comment: string;
  albumCover: string;
}
const useComment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const createComment = async (
    {
      title,
      rating,
      comment,
      albumTitle,
      albumId,
      userId,
      albumCover,
    }: CreateCommentsArguments,
    onSuccess: () => void
  ) => {
    try {
      setLoading(true);
      const resp = await fetch(
        "http://localhost:3000/api/comments/createComment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            albumTitle,
            albumCover,
            albumId,
            userId,
            title,
            rating,
            comment,
          }),
        }
      );
      const data = await resp.json();
      setLoading(false);
      if (resp.ok) {
        onSuccess();
      }
      return data;
    } catch (error: any) {
      return error.message;
    }
  };

  return { createComment, loading };
};

export default useComment;
