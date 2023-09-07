"use client";
import FeaturedAlbums from "../components/FeaturedAlbums";
import HomeJumbotronContent from "../components/HomeJumbotronContent";
import RecentlyAddedContainer from "../components/RecentlyAddedContainer";
import useFeaturedAlbums from "../hooks/useFeaturedAlbums";
import { useToken } from "./context/TokenContext";

export default function Home() {
  return <HomeJumbotronContent />;
}
