"use client";
import React, { useEffect, useState } from "react";
import AlbumReviewModal from "./AlbumReviewModal";
import ReviewCards from "./ReviewCards";

export interface Review {
  id: number;
  title: string;
  body: string;
  rating: number;
  albumId: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export default function CommentSection({
  albumData,
  params,
}: {
  albumData: any;
  params: any;
}) {
  const [reviews, setReviews] = useState([]);

  const fetchAllReviews = async () => {
    const response = await fetch("/api/album/fetchAlbumData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        albumId: params.album,
      }),
    });
    const data = await response.json();
    setReviews(data.album.reviews);
  };

  useEffect(() => {
    fetchAllReviews();
  }, []);

  return (
    <div className="flex text-white w-full justify-center items-center flex-col">
      <div className="text-lg mt-8  p-5 flex justify-evenly w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h1 className="font-semibold text-2xl">
          Comments{" "}
          <span className="underline text-[#1DB954] font-thin">(10k)</span>
        </h1>
        <AlbumReviewModal albumId={albumData.id} albumName={albumData.name} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 items-start">
        {reviews?.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">No Reviews Yet</h1>
            <p className="text-lg font-thin">
              Be the first to review this album
            </p>
          </div>
        ) : (
          reviews?.map((review: Review) => {
            return <ReviewCards key={review.id} review={review} />;
          })
        )}
      </div>

      <button className="mt-6 mb-6 bg-[#1DB954] rounded p-2 font-thin hover:cursor-pointer hover:bg-[#1ed760] transition-all duration-200 ease-in-out">
        Read More
      </button>
    </div>
  );
}
