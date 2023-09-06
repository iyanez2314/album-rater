"use client";
import React, { useContext, useState } from "react";
import { Home, User, Menu, LogOut, LogIn } from "react-feather";
import Link from "next/link";
import { AuthenticationContext } from "../app/context/AuthContext";
import { useSideBarNav } from "../app/context/SideBarNavContext";
import useAuth from "../hooks/useAuth";
import AuthModal from "./AuthModal";
import { useRouter } from "next/navigation";

export default function SideNavBar() {
  const { data, error } = useContext(AuthenticationContext);
  const router = useRouter();
  const { logout } = useAuth(router);
  const { toggleSlider, isOpen } = useSideBarNav();
  const [active, setActive] = useState("");
  const handleActive = (currentPageActive: string) => {
    setActive(currentPageActive);
  };
  return (
    <div className="flex h-full">
      <div className="relative flex items-center w-full h-full bg-black rounded">
        <div className="relative items-center w-40 flex flex-col h-full rounded space-y-60">
          <div className="mt-5">
            <h1 className="text-2xl font-bold text-white font-sans">
              <a href="/" className="">
                Album Rater
              </a>
            </h1>
          </div>
          <div className="w-40 h-1/2 flex justify-center">
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
                    <li
                      onClick={logout}
                      className="text-white rounded w-full hover:cursor-pointer  hover:bg-[#272727] hover:rounded p-6 items-center flex flex-col transition-all duration-300"
                    >
                      <LogOut className="items-center flex flex-col" />
                      Logout
                    </li>
                  </>
                ) : (
                  <li className="text-white text-center rounded w-full hover:cursor-pointer  hover:bg-[#272727] hover:rounded p-6 items-center flex flex-col transition-all duration-300">
                    <LogIn className="items-center flex flex-col" />
                    <AuthModal login={true} />
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="text-white mt-6 z-50">
        <Menu onClick={toggleSlider} />
      </div>
    </div>
  );
}
