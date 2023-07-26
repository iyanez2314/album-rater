"use client";
import React, { useContext, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { AuthenticationContext } from "../../context/AuthContext";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import UsersCommentsCard from "./components/UsersCommentsCard";

export interface Comments {
  id: number;
  title: string;
  body: string;
  rating: number;
  albumId: string;
  userId: number;
  createdAt: number;
  updatedAt: number;
}

export default function page() {
  const { data } = useContext(AuthenticationContext);
  const { updateProfile } = useAuth();
  const [inputs, setInputs] = useState({
    originalEmail: data?.email || "",
    username: "",
    email: "",
    name: "",
  });
  const [usersComments, setUsersComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsersComments = async () => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data?.email }),
      };
      setLoading(true);
      const res = await fetch("/api/comments/fetchUserComments", options);
      const resData = await res.json();
      setUsersComments(resData.userComments);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsersComments();
  }, []);

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
      <div className="bg-black rounded-lg text-white h-[600px] items-center w-1/2 flex flex-col space-y-2">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 items-start w-full">
                {loading ? (
                  <div className="flex justify-center items-center font-thin">
                    <p>Loading...</p>
                  </div>
                ) : (
                  usersComments.map((comment: Comments) => {
                    return (
                      <UsersCommentsCard comment={comment} />
                      // <div className="flex flex-col justify-center items-center">
                      //   <p>{comment.title}</p>
                      //   <p>{comment.body}</p>
                      // </div>
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
