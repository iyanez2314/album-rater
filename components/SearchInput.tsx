"use client";
import { useState } from "react";
import { useToken } from "../app/context/TokenContext";
import useSearch from "../hooks/useSearch";

export default function SearchInput() {
  const [isInputFocused, setInputFocus] = useState(false);
  const [isInputFilled, setInputFilled] = useState(false);
  const [inputvalue, setInputValue] = useState("");
  const { token } = useToken(); // Grabs the token from the context
  const { searchResults } = useSearch(inputvalue, 300, token);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFilled(e.target.value !== "");
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  const isActive = isInputFocused || isInputFilled;

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        name="text"
        className={`w-10 h-10 rounded-full outline-none p-2 transition-all duration-500 ease-in-out 
          ${
            isActive
              ? "bg-white border-[#1DB954] w-72 pl-14"
              : "bg-transparent cursor-pointer"
          }`}
        placeholder={isActive ? "Search something..." : ""}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`absolute h-11 w-11 rounded-full fill-current text-[#1DB954] left-0 
          ${
            isActive
              ? "bg-transparent border-none"
              : "bg-white border-[#1DB954]"
          }`}
        style={{ zIndex: isActive ? 0 : -1 }}
      >
        <rect fill="white" height="24" width="24"></rect>
        <path
          fill=""
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
