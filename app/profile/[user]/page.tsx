"use client";
import React, { useContext, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { AuthenticationContext } from "../../context/AuthContext";

export default function page() {
  const { loading, error, data } = useContext(AuthenticationContext);
  const { updateProfile } = useAuth();
  const [inputs, setInputs] = useState({
    originalEmail: data?.email || "",
    username: "",
    email: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(inputs);
  };

  return (
    <div className="flex justify-evenly items-center min-h-screen flex-col sm:flex-row">
      <div className="bg-black rounded-lg text-white h-[500px] w-96 flex justify-center items-center flex-col space-y-2">
        <div className="mb-3">
          <h1 className="text-lg font-semibold underline">
            Update Profile Info
          </h1>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>Username</label>
            <input
              min={3}
              max={20}
              className=" text-black p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              name="username"
              type="text"
              placeholder={data?.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className=" text-black p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              name="email"
              type="email"
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder={data?.name}
            />
          </div>

          <button
            type="submit"
            className=" bg-purple-600 text-white p-2 rounded-md hover:opacity-80 transition-all duration-200 ease-in-out "
          >
            Update Info
          </button>
        </form>
      </div>
      <div className="bg-black rounded-lg text-white h-[600px] w-1/2 flex justify-center items-center flex-col space-y-2"></div>
    </div>
  );
}
