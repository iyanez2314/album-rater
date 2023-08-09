import { useEffect, useState } from "react";
const useAlbumComments = (albumId: number) => {
  const [albumsComments, setAlbumsComments] = useState([]);
  const [error, setError] = useState(null);

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
        const data = await response.json();
        setAlbumsComments(data.album.reviews);
      } catch (error: any) {
        setError(error.message);
        console.log(error);
      }
    };
    fetchAllReviews();
  }, [albumId]);

  return { albumsComments, error };
};

export default useAlbumComments;
