import { useState } from "react";
import { ArrowDown } from "react-feather";
import { Comments } from "../page";

export default function UsersCommentsCard({ comment }: { comment: Comments }) {
  const [isTruncated, setIsTruncated] = useState(true);
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <div className=" mt-5 w-full max-w-[550px] bg-[#272727] rounded-[20px] flex flex-col items-center justify-start backdrop-blur-[10px] transition-all duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer py-[15px]">
      <div className="flex items-start w-full max-w-[350px]">
        <div className="w-[70px] h-[70px] ml-[10px] rounded-[10px] bg-gradient-to-r from-[#d7cfcf] to-[#9198e5] transition-all duration-500 ease-in-out hover:from-[#9198e5] hover:to-[#712020]"></div>
        <div className="mb-4 w-[calc(100%-110px)] ml-[10px] text-white font-poppins">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[18px] font-bold">{comment.title}</p>
              <div className="flex gap-2">
                <span>*****</span>
              </div>
            </div>
            <span className="text-[12px]">12 days ago</span>
          </div>
          <p
            className={`text-[14px] font-light ${
              isTruncated ? "truncate" : ""
            }`}
          >
            {comment.body}
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
