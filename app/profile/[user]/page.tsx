"use client";
import React, { useContext, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { AuthenticationContext } from "../../context/AuthContext";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import UsersCommentsCard from "./components/UsersCommentsCard";
import useFetchUserComments from "../../../hooks/useFetchUserComments";
import Loading from "./loading";
import { useRouter } from "next/navigation";

export interface Comments {
  id: number;
  title: string;
  body: string;
  rating: number;
  albumId: string;
  userId: number;
  createdAt: number;
  updatedAt: number;
  album: Album;
}

interface Album {
  albumId: number;
  albumCover: string;
}

export default function page() {
  const router = useRouter();
  const { data } = useContext(AuthenticationContext);
  const { usersComments, error, loading, refreshData } =
    useFetchUserComments(data);
  const { updateProfile } = useAuth(router);
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

  useEffect(() => {
    refreshData();
  }, [data]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="flex justify-evenly items-center min-h-screen flex-col mt-10 gap-20 mb-16">
      <div className="bg-white rounded-lg text-[#84A59D] h-[500px] w-3/4 flex justify-center items-center flex-col space-y-2">
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
            className=" bg-[#84A59D] text-white p-2 rounded-md hover:opacity-80 transition-all duration-200 ease-in-out "
          >
            Update Info
          </button>
        </form>
      </div>
      <div className="bg-white rounded-lg text-[#84A59D] h-full items-center w-3/4 flex flex-col space-y-2">
        <div className="w-full">
          <Tabs>
            <Tab label="Comments Count">
              <div className="flex flex-col justify-center items-center mt-20 font-thin">
                <h1>Total Comments Made On Album</h1>
                <p>{usersComments.length}</p>
              </div>
            </Tab>
            <Tab label="Comments">
              <div className="flex flex-col justify-center items-center mt-20 font-thin">
                <h1>Comments Made On Albums</h1>
              </div>
              <div className="grid grid-cols-1 p-10 my-5 mx-3 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {!data ? (
                  <div className="flex justify-center items-center font-thin">
                    <p>Loading...</p>
                  </div>
                ) : (
                  usersComments.map((comment: Comments) => {
                    return (
                      <UsersCommentsCard key={comment.id} comment={comment} />
                    );
                  })
                )}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
