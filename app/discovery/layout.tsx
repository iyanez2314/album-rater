import React from "react";
import AuthHeader from "../AuthComponents/AuthHeader";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AuthHeader />
      {children}
    </div>
  );
}
