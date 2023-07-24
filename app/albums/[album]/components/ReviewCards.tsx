"use client";
import { useState } from "react";
import { ArrowDown } from "react-feather";
import { Review } from "./CommentSection";

export default function ReviewCards({ review }: { review: Review }) {
  console.log(review.createdAt);
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  let reviewDate: any = new Date(review.createdAt);

  // Get the current date
  let currentDate: any = new Date();

  // Calculate the difference in milliseconds
  let differenceInMilliseconds = Math.abs(currentDate - reviewDate);

  // Convert the difference to days
  let differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  const betweenDays = () => {
    if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays === 1) {
      return "Yesterday";
    } else {
      return `${differenceInDays} days ago`;
    }
  };

  return (
    <div className="relative mt-5 w-full max-w-[350px] bg-[#353535] rounded-[20px] flex flex-col items-center justify-start backdrop-blur-[10px] transition-all duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer py-[15px]">
      <div className="flex items-start w-full">
        <div className="w-[70px] h-[70px] ml-[10px] rounded-[10px] bg-gradient-to-r from-[#d7cfcf] to-[#9198e5] transition-all duration-500 ease-in-out hover:from-[#9198e5] hover:to-[#712020]"></div>
        <div className="mb-4 w-[calc(100%-110px)] ml-[10px] text-white font-poppins">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[18px] font-bold">{review.title}</p>
              <div className="flex gap-2">
                <p className="text-[12px] font-light">Isaac69</p>
                <span>*****</span>
              </div>
            </div>
            <span className="text-[12px]">{betweenDays()}</span>
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
