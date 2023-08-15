"use client";
import React, { useContext, useState } from "react";
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
  const { data, error } = useContext(AuthenticationContext);
  const [active, setActive] = useState("");
  const handleActive = (currentPageActive: string) => {
    setActive(currentPageActive);
  };
  return (
    <div className="flex h-full">
      <div className="relative flex items-center w-full h-full bg-black rounded z-50">
        <div className="relative items-center w-40 flex flex-col h-full rounded space-y-60">
          <div className="mt-5">
            <h1 className="text-2xl font-bold text-white">
              <a href="/">Album Rater</a>
            </h1>
          </div>
          <div className="w-40">
            <nav className="flex flex-col items-center justify-center">
              <ul className="flex flex-col justify-center items-center gap-5">
                <Link href="/" onClick={() => handleActive("home")}>
                  <li
                    className={`text-white rounded w-full hover:cursor-pointer hover:bg-[#272727] hover:rounded p-6 items-center flex flex-col transition-all duration-300 ${
                      active === "home" ? "bg-[#272727]" : ""
                    }`}
                  >
                    <Home />
                    Discover
                  </li>
                </Link>
                {data ? (
                  <>
                    <li
                      className={`text-white rounded w-full hover:cursor-pointer hover:bg-[#272727] hover:rounded p-6 items-center flex flex-col transition-all duration-300 ${
                        active === "profile" ? "bg-[#272727]" : ""
                      }`}
                    >
                      <Link
                        href={`/profile/user`}
                        className="items-center flex flex-col"
                        onClick={() => handleActive("profile")}
                      >
                        <User />
                        Profile
                      </Link>
                    </li>
                  </>
                ) : null}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="text-white mt-6">
        <Sidebar />
      </div>
    </div>
  );
}
