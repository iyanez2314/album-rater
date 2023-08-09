"use client";
import { Star } from "react-feather";
import useAlbumComments from "../../../../hooks/useAlbumComments";
export default function AlbumData({ albumData }: any) {
  const { name } = albumData;
  const artistName = albumData?.artists?.[0].name || "";
  const { albumsComments, error } = useAlbumComments(albumData?.id || "");

  const albumAverageRating = () => {
    let count = 0;
    for (let i = 0; i < albumsComments?.length; i++) {
      count = albumsComments[i]?.rating;
    }

    return count / albumsComments?.length;
  };

  return (
    <div className="text-white flex  flex-col justify-center items-center w-full">
      <div className=" flex justify-center mx-12 w-full items-center p-2">
        <h1 className="text-sm md:text-lg lg:text-lg xl:text-2xl font-semibold">
          {name}
        </h1>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex justify-center items-center">
            <p
              className="m-2
              text-md font-light underline cursor-pointer"
            >
              {artistName}
            </p>
            <div className="mx-2 mb-1 flex font-bold justify-start gap-5">
              <button className="rounded-md w-12 cursor-none bg-[#1DB954]">
                R&B
              </button>
              <button className="rounded-md w-12 cursor-none bg-[#1DB954]">
                R&B
              </button>
            </div>
          </div>

          <div className="mx-1 flex gap-2 mt-1 justify-start items-center w-1/2">
            {albumAverageRating() ? (
              [...Array(albumAverageRating())].map((e, i) => (
                <Star key={i} className="text-[#1DB954]" fill="currentColor" />
              ))
            ) : (
              <Star className="text-[#1DB954]" fill="currentColor" />
            )}
          </div>
          <hr className="mt-20 border-[#1DB954]" />
        </div>
      </div>
    </div>
  );
}
