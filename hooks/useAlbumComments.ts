import { useEffect, useState } from "react";
interface User {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  updatedAt: string;
  username: string;
}

interface Review {
  albumId: string;
  body: string;
  createdAt: string;
  id: number;
  updatedAt: string;
  userId: number;
  rating: number;
  user: User;
}

interface AlbumComments {
  album: {
    albumId: string;
    title: string;
    albumCover: string;
    createdAt: string;
    updatedAt: string;
    reviews: Review[];
  };
}

const useAlbumComments = (albumId: number) => {
  const [albumsComments, setAlbumsComments] = useState<Review[]>([]);
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
            albumId: albumId,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch reviews.");
        }
        const data: AlbumComments = await response.json();
        setAlbumsComments(data.album.reviews);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchAllReviews();
  }, [albumId]);

  return { albumsComments, error };
};

export default useAlbumComments;
