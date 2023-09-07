"use client";
import bbblurry from "../public/bbblurry.svg";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";
import AuthModal from "./AuthModal";
import Link from "next/link";

function HomeJumbotronContent() {
  const { data } = useContext(AuthenticationContext);
  return (
    <div
      className="h-screen bg-no-repeat bg-cover flex  flex-col"
      style={{ backgroundImage: `url(${bbblurry.src})` }}
    >
      <div className="h-full flex flex-col sm:flex-row md:flex-row xl:flex-row lg:flex-row w-full sm:w-1/2 md:w-1/2  bg-white">
        <div className="w-full h-full p-4 flex flex-col gap-10">
          <div className="flex justify-between mx-4 ">
            <h1 className="text-2xl">Album Rater</h1>
            {data ? null : (
              <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center text-white">
                <AuthModal login={true} />
              </button>
            )}
          </div>
          {/* Bottom Section */}
          <div className="flex flex-col justify-center items-center w-full h-full gap-7">
            <div className="w-full sm:w-1/2">
              <h3 className="text-6xl font-semibold text-black text-left">
                {data
                  ? `Welcome Back ${data.username}`
                  : "Welcome To Album Rater"}
              </h3>
            </div>
            <div className="w-full sm:w-1/2">
              <p className="font-thin text-sm text-left">
                Album Rater is a web application that allows you to rate your
                favorite albums with other music lovers.
              </p>
            </div>
            <div className="flex gap-5 w-full sm:w-1/2">
              {data ? (
                <>
                  <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center text-white">
                    <Link href={"/discovery"}>Discovery</Link>
                  </button>
                  <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center text-white">
                    <Link href={"/profile/user"}>Profile</Link>
                  </button>
                </>
              ) : (
                <>
                  <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center text-white">
                    <AuthModal login={false} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeJumbotronContent;
