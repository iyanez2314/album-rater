import React from "react";
import AlbumReviewModal from "./AlbumReviewModal";
import ReviewCards from "./ReviewCards";

export default function CommentSection() {
  return (
    <div className="flex text-white w-full justify-center items-center flex-col">
      <div className="text-lg mt-8  p-5 flex justify-evenly w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h1 className="font-semibold text-2xl">
          Comments{" "}
          <span className="underline font-light text-[#1DB954]">(10k)</span>
        </h1>
        <AlbumReviewModal />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7">
        <ReviewCards />
        <ReviewCards />
        <ReviewCards />
        <ReviewCards />
        <ReviewCards />
        <ReviewCards />
      </div>
    </div>
  );
}
