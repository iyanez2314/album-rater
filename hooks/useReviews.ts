"use client";

import { useState, useEffect } from "react";

export interface Review {
  id: number;
  title: string;
  body: string;
  rating: number;
  albumId: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

interface User {
  id: number;
  email: string;
  username: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface params {
  album: string | null;
}

const useReviews = (params: params, refreshKey: number) => {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const response = await fetch("/api/album/fetchAlbumData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            albumId: params,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch reviews.");
        }
        const data = await response.json();
        console.log(data);
        setReviews(data.album?.reviews || []);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      }
    };
    fetchAllReviews();
  }, [params, refreshKey]);

  return { reviews, error };
};

export default useReviews;
