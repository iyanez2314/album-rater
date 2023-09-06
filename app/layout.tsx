"use client";
import { useState } from "react";
import { Menu } from "react-feather";
import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import "../styles/globals.css";
import AuthContext from "./context/AuthContext";
import { TokenProvider } from "./context/TokenContext";
import { SideBarNavProvider, useSideBarNav } from "./context/SideBarNavContext";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          html {
            font-family: ${rubik.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="isaac-bg">
        <AuthContext>
          <TokenProvider>
            <SideBarNavProvider>
              <ContentComponent children={children} />
            </SideBarNavProvider>
          </TokenProvider>
        </AuthContext>
      </body>
    </html>
  );
}

function ContentComponent({ children }: { children: React.ReactNode }) {
  const { toggleSlider, isOpen } = useSideBarNav();
  return (
    <main className=" mx-auto flex-grow overflow-y-auto">
      {/* <div className="flex h-screen w-screen bg-red-500"> */}
      {/* <div className="text-white top-6 left-2 fixed">
        <Menu onClick={toggleSlider} />
      </div>
      <div
        className={`fixed h-screen overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <SideNavBar />
      </div> */}

      <div className="flex flex-col w-full">
        {/* <div className="w-full flex justify-center">
          <Header />
        </div> */}
        {children}
      </div>
    </main>
  );
}
