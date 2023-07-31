"use client";
import { useEffect, useState } from "react";

const useAlbum = (token: string | null, id: string) => {
  const [album, setAlbum] = useState([]);
  useEffect(() => {
    const fetchAlbum = async () => {
      if (token) {
        const url = `https://api.spotify.com/v1/albums/${id}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setAlbum(data);
      }
    };
    fetchAlbum();
  }, []);
  return { album };
};

export default useAlbum;
