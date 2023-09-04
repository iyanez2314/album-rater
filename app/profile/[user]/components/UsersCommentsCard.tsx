import Link from "next/link";
import { Comments } from "../page";
import EditModal from "./EditModal";

export default function UsersCommentsCard({ comment }: { comment: Comments }) {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden border border-transparent w-full h-[275px]">
      <Link href={`/albums/${comment?.album?.albumId}`}>
        <img
          src={comment?.album?.albumCover}
          className="w-full h-36 object-cover"
        />
      </Link>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-semibold text-black">
            {comment.title}
          </a>
          <div className="w-1/2 flex justify-end">
            <EditModal comment={comment} />
          </div>
        </div>
        <p className="mt-2 text-gray-600 text-sm truncate">{comment.body}</p>
      </div>
    </div>
  );
}
