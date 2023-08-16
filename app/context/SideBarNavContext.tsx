"use client";
import { useState, createContext, useContext } from "react";

const SideBarNavContext = createContext({
  isOpen: false,
  toggleSlider: () => {},
});

export const SideBarNavProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SideBarNavContext.Provider value={{ isOpen, toggleSlider }}>
      {children}
    </SideBarNavContext.Provider>
  );
};

export const useSideBarNav = () => useContext(SideBarNavContext);
