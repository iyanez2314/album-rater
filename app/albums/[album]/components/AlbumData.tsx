"use client";
import Link from "next/link";
import { Star } from "react-feather";
import useAlbumComments from "../../../../hooks/useAlbumComments";

interface AlbumComment {
  rating: number;
}

export default function AlbumData({ albumData }: any) {
  const { name } = albumData;
  const artistName = albumData?.artists?.[0].name || "";
  const artistId = albumData?.artists?.[0].id || "";
  const { albumsComments, error } = useAlbumComments(albumData?.id || "");
  const albumAverageRating = () => {
    let count = 0;
    if (albumsComments?.length === 0) return 0;
    for (let i = 0; i < albumsComments?.length; i++) {
      count += (albumsComments[i] as AlbumComment).rating || 0;
    }
    return Math.round(count / (albumsComments?.length || 1));
  };

  return (
    <div className="text-[#84A59D] flex flex-col justify-center items-center w-full h-[100px] mt-5">
      <div className=" flex justify-center mx-12 w-full items-center p-2">
        <h1 className="text-xl md:text-xl lg:text-lg xl:text-2xl font-semibold">
          {name}
        </h1>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex justify-center items-center">
            <h1>Let's do some fun stuff with this</h1>
            <Link href={`/artist/${artistId}`}>
              <p
                className="m-2
              text-md font-light underline cursor-pointer"
              >
                {artistName}
              </p>
            </Link>
          </div>
          <div className="mx-1 flex gap-2 mt-1 justify-center items-center w-1/2">
            {albumAverageRating() ? (
              [...Array(albumAverageRating())].map((e, i) => (
                <Star key={i} className="text-[#F5CAC3]" fill="currentColor" />
              ))
            ) : (
              <Star className="text-[#F5CAC3]" fill="currentColor" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
