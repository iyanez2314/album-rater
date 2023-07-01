import React from "react";

export default function CommentSection() {
  return (
    <div className="flex text-white w-full justify-center items-center flex-col">
      <div className="text-lg mt-8  p-5">
        <h1 className="font-semibold text-2xl">
          Comments{" "}
          <span className="underline font-light text-[#1DB954]">(10k)</span>
        </h1>
      </div>
      <div className="justify-center flex flex-col w-full items-center">
        <div className="flex justify-evenly  p-5 w-1/2">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className="flex justify-evenly  p-5 w-1/2">
          <p>User</p>
          <p>Comment</p>
        </div>{" "}
        <div className="flex justify-evenly  p-5 w-1/2">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className="flex justify-evenly  p-5 w-1/2">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className="flex justify-evenly  p-5 w-1/2">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className="flex justify-evenly  p-5 w-1/2">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className="flex justify-evenly  p-5 w-1/2">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className="flex justify-evenly  p-5 w-1/2">
          <p>User</p>
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
}
