"use client";
import FeaturedAlbums from "../components/FeaturedAlbums";
import RecentlyAddedContainer from "../components/RecentlyAddedContainer";
import useFeaturedAlbums from "../hooks/useFeaturedAlbums";
import { useToken } from "./context/TokenContext";

export default function Home() {
  const { token } = useToken();
  const { featuredAlbums } = useFeaturedAlbums(token);
  if (!token || !featuredAlbums) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <RecentlyAddedContainer recentlyAdded={featuredAlbums} />
      <hr className="mt-20 border-[#1DB954]" />
      <FeaturedAlbums recentlyAdded={featuredAlbums} />
    </>
  );
}
