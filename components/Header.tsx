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
    <header className="flex justify-between items-center py-4 space-x-2 px-10">
      <div className="flex text-white text-3xl font-bold items-center justify-between w-full space-x-2">
        <Link href="/">Logo</Link>
      </div>
      {data ? (
        <nav className="text-white">
          <ul className="flex items-center space-x-4">
            <li>
              <button
                className="bg-[#1DB954] rounded p-2 font-thin hover:cursor-pointer hover:bg-[#1ed760] transition-all duration-200 ease-in-out"
                onClick={logout}
              >
                Logout
              </button>
            </li>
            <li>
              <Link href="/profile/dog">Profile</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="text-white">
          <ul className="flex items-center space-x-5">
            <li>
              <SearchInput />
            </li>
            <li>
              <AuthModal login={true} />
            </li>
            <li>
              <AuthModal login={false} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
