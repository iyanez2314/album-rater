"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";
import useAuth from "../hooks/useAuth";
import AuthModal from "./AuthModal";
import SearchInput from "./SearchInput";

export default function Header() {
  const { data, loading } = useContext(AuthenticationContext);
  const { logout } = useAuth();
  return (
    <header className="w-full sm:w-1/2 flex justify-between items-center py-4 px-10">
      <nav className="text-white flex items-center justify-center w-full">
        <ul className="flex justify-center items-center z-0 w-1/2 sm:w-full md:w-full">
          <div className="w-1/2 z-0  sm:w-1/2 flex">
            <li className="ml-6 z-0 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0">
              <SearchInput />
            </li>
          </div>
          {data ? (
            <div className="flex justify-center items-center space-x-4">
              {/* <li>
                <button
                  className="bg-[#1DB954] rounded p-2 font-thin hover:cursor-pointer hover:bg-[#1ed760] transition-all duration-200 ease-in-out"
                  onClick={logout}
                >
                  Logout
                </button>
              </li> */}
            </div>
          ) : (
            <div className="flex justify-end w-full sm:w-1/2">
              <li>
                <AuthModal login={false} />
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
