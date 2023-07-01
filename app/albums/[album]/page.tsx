import albumCover from "/public/brett-jordan-x3wDxZJx9qs-unsplash.jpg";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: {
    album: string;
  };
}

export default function page({ params }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex items-center justify-center w-full p-7">
        <Image src={albumCover} width={700} height={700} alt="image" />
      </div>
      <div className="text-white w-1/2 p-3">
        <div className="mb-1 flex justify-between mx-7">
          <h1 className="text-2xl font-semibold">Album Name</h1>
          <p>Messages</p>
        </div>
        <div className="mx-7">
          <p className="mb-2 text-md font-light underline cursor-pointer">
            Artist Name
          </p>
          <div className="mb-1 flex font-bold justify-start gap-5">
            <button className="rounded-md w-12 bg-[#1DB954]">R&B</button>
            <button className="rounded-md w-12 bg-[#1DB954]">R&B</button>
          </div>
          <p>*****</p>
        </div>
        <hr className="mt-20 border-[#1DB954]" />
      </div>
      <div className="flex text-white w-1/2 justify-center items-center flex-col">
        <div className="text-lg mt-8  p-5">
          <h1 className="font-semibold text-2xl">
            Comments{" "}
            <span className="underline font-light text-[#1DB954]">(10k)</span>
          </h1>
        </div>
        <div className=" flex justify-around  p-5 w-full">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className=" flex justify-around  p-5 w-full">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className="flex justify-around  p-5 w-full">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className=" flex justify-around  p-5 w-full">
          <p>User</p>
          <p>Comment</p>
        </div>
        <div className=" flex justify-around  p-5 w-full">
          <p>User</p>
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
}
