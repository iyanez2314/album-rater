import Image from "next/image";
import FeaturedAlbums from "../components/FeaturedAlbums";
import RecentlyAddedContainer from "../components/RecentlyAddedContainer";

export default function Home() {
  return (
    <>
      <RecentlyAddedContainer />
      <hr className="mt-20 border-[#1DB954]" />
      <FeaturedAlbums />
    </>
  );
}
