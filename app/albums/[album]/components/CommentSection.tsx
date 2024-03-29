"use client";
import React, { useEffect, useState } from "react";
import useReviews from "../../../../hooks/useReviews";
import AlbumReviewModal from "./AlbumReviewModal";
import ReviewCards from "./ReviewCards";
import { Review } from "../../../../hooks/useReviews";
import { CircularProgress } from "@mui/material";

export default function CommentSection({
  albumData,
  params,
}: {
  albumData: any;
  params: any;
}) {
  const [refreshKey, setRefreshKey] = useState(0);
  const { reviews, error } = useReviews(params.album, refreshKey);
  const handleRefreshKey = () => {
    setRefreshKey((prev) => prev + 1);
  };
  return (
    <div className="flex text-[#84A59D] w-full justify-center items-center flex-col sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
      <div className="text-lg mt-8  p-5 flex justify-evenly w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h1 className="font-semibold text-2xl">
          Comments{" "}
          <span className="underline text-[#F5CAC3] font-thin">
            ({reviews ? reviews?.length : 0})
          </span>
        </h1>
        <AlbumReviewModal
          handleRefreshKey={handleRefreshKey}
          albumCover={albumData?.images?.[0]?.url}
          albumId={albumData?.id}
          albumName={albumData?.name}
        />
      </div>
      {reviews === null ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">No Reviews Yet</h1>
          <p className="text-lg font-thin">Be the first to review this album</p>
        </div>
      ) : reviews.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">No Reviews Yet</h1>
          <p className="text-lg font-thin">Be the first to review this album</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-7 items-start sm:w-3/4 xl:w-full">
          {reviews?.map((review: Review) => {
            return <ReviewCards key={review.id} review={review} />;
          })}
        </div>
      )}
      <button className="mt-6 mb-6 bg-[#84A59D] rounded p-2 font-thin hover:cursor-pointer  text-white transition-all duration-200 ease-in-out">
        Read More
      </button>
    </div>
  );
}
