import React from "react";
import Image from "next/image";
import { Comments } from "../page";

interface Props {
  comment: Comments;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (commentId: number) => void;
}

export default function EditModalInputs({
  comment,
  handleInputChange,
  handleSubmit,
  handleDelete,
}: Props) {
  return (
    <>
      <div>
        <Image
          width={400}
          height={200}
          className="object-cover h-40 rounded"
          src={comment.album.albumCover}
          alt="album cover"
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
        <div>
          <label className="text-sm font-light">Title</label>
          <input
            name="title"
            placeholder={comment.title}
            type="text"
            className="bg-white border rounded p-2 py-3 w-full"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="text-sm font-light">Comment</label>
          <textarea
            name="body"
            className="bg-white border rounded p-2 py-3 w-full"
            placeholder={comment.body}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button className="text-white text-center bg-[#1DB954] p-2 rounded hover:opacity-80 transition-all duration-200 ease-in-out ">
          Update Comment
        </button>
      </form>
      <button
        onClick={() => handleDelete(comment.id)}
        className="mt-3 text-white text-center bg-red-600 p-2 rounded hover:opacity-80 transition-all duration-200 ease-in-out "
      >
        Delete Comment
      </button>
    </>
  );
}
