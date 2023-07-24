import React from "react";
import AlbumReviewModal from "./AlbumReviewModal";
import ReviewCards from "./ReviewCards";

export default function CommentSection() {
  return (
    <div className="flex text-white w-full justify-center items-center flex-col">
      <div className="text-lg mt-8  p-5 flex justify-evenly w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h1 className="font-semibold text-2xl">
          Comments{" "}
          <span className="underline text-[#1DB954] font-thin">(10k)</span>
        </h1>
        <AlbumReviewModal />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 items-start">
        <ReviewCards />
        <ReviewCards />
        <ReviewCards />
        <ReviewCards />
        <ReviewCards />
        <ReviewCards />
      </div>
      <button className="mt-6 mb-6 bg-[#1DB954] rounded p-2 font-thin hover:cursor-pointer hover:bg-[#1ed760] transition-all duration-200 ease-in-out">
        Read More
      </button>
    </div>
  );
}
