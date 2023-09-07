"use client";
import Link from "next/link";
import { Search, Settings, LogOut, Globe, Menu } from "react-feather";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthHeader() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const { logout } = useAuth(router);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center gap-4 mt-5 w-full relative">
      <div className="w-1/2 mx-5">
        <h1 className="text-2xl font-semibold text-black text-left">
          Album Rater
        </h1>
      </div>
      <div className="items-center flex lg:hidden z-10 mr-5">
        <Menu size={25} onClick={toggleMenu} />
      </div>
      <div
        className={`flex justify-end gap-5 w-1/2 mx-5 lg:flex ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
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
          <Link href={"/profile/user"}>Profile</Link>
        </button>
        <button
          className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center gap-2 text-white hover:cursor-pointer"
          onClick={logout}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
