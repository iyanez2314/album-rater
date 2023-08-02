"use client";
import React, { useContext } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Home,
  Search,
  Settings,
  Sidebar,
  User,
} from "react-feather";
import Link from "next/link";
import { AuthenticationContext } from "../app/context/AuthContext";

export default function SideNavBar() {
  const { data } = useContext(AuthenticationContext);
  return (
    <>
      <div className="relative flex items-center w-full h-full bg-black rounded">
        <div className="relative items-center w-40 flex flex-col h-full rounded space-y-60">
          <div className="mt-5">
            <h1 className="text-2xl font-bold text-white">
              <a href="/">Album Rater</a>
            </h1>
          </div>
          <div className="w-40">
            <nav className="flex flex-col items-center justify-center">
              <ul className="flex flex-col justify-center items-center">
                <li className="text-white w-full text-sm hover:cursor-pointer hover:bg-[#272727] hover:rounded p-6 items-center flex flex-col transition-all duration-300">
                  <Home />
                  Discover
                </li>
                <li className="text-white w-full text-sm  hover:cursor-pointer hover:bg-[#272727] hover:rounded p-6 items-center flex flex-col transition-all duration-300">
                  <Search />
                  Search
                </li>
                {data ? (
                  <>
                    <li className="text-white w-full  hover:cursor-pointer hover:bg-[#272727] hover:rounded p-6 items-center flex flex-col transition-all duration-300">
                      <Link
                        href="profile/user"
                        className="items-center flex flex-col"
                      >
                        <User />
                        Profile
                      </Link>
                    </li>
                    <li className="text-white w-full text-sm hover:cursor-pointer hover:bg-[#272727] hover:rounded p-6 items-center flex flex-col transition-all duration-300">
                      <Settings />
                      Settings
                    </li>
                  </>
                ) : null}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
