import React from "react";

interface props {
  children: React.ReactNode;
}
const TopAppBar = ({ children }: props) => {
  return <div className="flex h-16 w-full items-center px-4">{children}</div>;
};

export default TopAppBar;
