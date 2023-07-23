"use client";
import React, { useContext } from "react";
import { AuthenticationContext } from "../../context/AuthContext";

export default function page() {
  const { loading, error, data } = useContext(AuthenticationContext);
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <div className="bg-black rounded-lg text-white h-96 w-96 flex justify-center items-center flex-col space-y-2">
        <div className="mb-3">
          <h1 className="text-lg font-semibold underline">
            Update Profile Info
          </h1>
        </div>
        <form className="space-y-3">
          <div className="flex flex-col">
            <label>Username</label>
            <input
              min={3}
              max={20}
              className=" text-black p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              name="username"
              type="text"
              placeholder={data?.username}
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className=" text-black p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              name="email"
              type="email"
              placeholder={data?.email}
            />
          </div>
          <div className="flex flex-col">
            <label>Name</label>
            <input
              min={3}
              max={20}
              className=" text-black p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              name="name"
              type="text"
              placeholder={data?.name}
            />
          </div>

          <button className=" bg-purple-600 text-white p-2 rounded-md hover:opacity-80 transition-all duration-200 ease-in-out ">
            Update Info
          </button>
        </form>
      </div>
    </div>
  );
}
