import { useState } from "react";
import { ArrowDown } from "react-feather";
import { Comments } from "../page";

export default function UsersCommentsCard({ comment }: { comment: Comments }) {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden border border-transparent">
      <img
        src={comment?.album?.albumCover}
        className="w-full h-36 object-cover"
      />
      {/* <div className="w-full h-36 bg-purple-300 object-cover"></div> */}
      <div className="p-4">
        <a href="#" className="text-lg font-semibold text-black">
          {comment.title}
        </a>

        <p className="mt-2 text-gray-600 text-sm">{comment.body}</p>
      </div>
    </div>
  );
}
