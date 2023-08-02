"use client";
import { useContext, useState } from "react";
import { ArrowDown, Star } from "react-feather";
import { Review } from "./CommentSection";
import getDays from "../../../../util/days";

export default function ReviewCards({ review }: { review: Review }) {
  const [isTruncated, setIsTruncated] = useState(true);
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };
  const days = getDays(review.createdAt);
  const reviewRating = review.rating;
  console.log(review);

  return (
    <div className=" mt-5 w-full min-w-[350px] bg-[#353535] rounded-[20px] flex flex-col items-center justify-start backdrop-blur-[10px] transition-all duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer py-[15px]">
      <div className="flex items-start w-full max-w-[350px]">
        <div className="w-[70px] h-[70px] ml-[10px] rounded-[10px] bg-gradient-to-r from-[#d7cfcf] to-[#9198e5] transition-all duration-500 ease-in-out hover:from-[#9198e5] hover:to-[#712020]"></div>
        <div className="mb-4 w-[calc(100%-110px)] ml-[10px] text-white font-poppins">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[18px] font-bold">{review.title}</p>
              <div className="flex gap-2 items-center">
                <p className="text-[12px] font-light">{review.user.username}</p>
                <>
                  {[...Array(reviewRating)].map((_, i) => (
                    <Star
                      className="text-[#1DB954]"
                      fill="currentColor"
                      size={10}
                    />
                  ))}
                </>
              </div>
            </div>
            <span className="text-[12px]">{days}</span>
          </div>
          <p
            className={`text-[14px] font-light ${
              isTruncated ? "truncate" : ""
            }`}
          >
            {review.body}
          </p>
        </div>
      </div>
      <div
        className="flex gap-3 items-center justify-center"
        onClick={toggleTruncate}
      >
        {isTruncated ? "Read More" : "Read Less"}
        <span>
          {isTruncated ? (
            <ArrowDown size={20} className="text-white" />
          ) : (
            <ArrowDown size={20} className="text-white transform rotate-180" />
          )}
        </span>
      </div>
    </div>
  );
}
