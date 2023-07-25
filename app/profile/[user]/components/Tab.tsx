import React from "react";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="p-2">{children}</div>;
};

export default Tab;
