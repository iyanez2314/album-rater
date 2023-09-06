"use client";
import Link from "next/link";
import { Search, Settings, LogOut, Globe } from "react-feather";
import useAuth from "../../hooks/useAuth";

export default function AuthHeader() {
  const { logout } = useAuth();
  return (
    <div className="flex justify-between items-center gap-4 mt-5 w-full">
      <div className="w-1/2 mx-5">
        <h1 className="text-2xl font-semibold text-black text-left">
          Album Rater
        </h1>
      </div>
      <div className="flex justify-end gap-5 w-1/2 mx-5">
        <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center gap-2 text-white">
          <Search />
          <Link href={"/search"}>Search</Link>
        </button>
        <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center gap-2 text-white">
          <Globe size={20} />
          <Link href={"/discovery"}>Discovery</Link>
        </button>
        <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center gap-2 text-white">
          <Settings size={20} />
          <span>Profile</span>
        </button>
        <button
          className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center gap-2 text-white"
          onClick={logout}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
