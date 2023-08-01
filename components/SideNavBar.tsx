import React from "react";

export default function SideNavBar() {
  return (
    <div className="items-center w-40 flex flex-col h-full bg-black rounded space-y-60">
      <div className="mt-4">
        <h1 className="text-4xl font-bold text-white">Logo</h1>
      </div>
      <div className="w-40">
        <nav className="flex flex-col items-center justify-center">
          <ul className="flex flex-col justify-center items-center">
            <li className="text-white hover:cursor-pointer p-6">Discover</li>
            <li className="text-white hover:cursor-pointer p-6">Search</li>
            <li className="text-white hover:cursor-pointer p-6">Profile</li>
            <li className="text-white hover:cursor-pointer p-6 ">Settings</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
