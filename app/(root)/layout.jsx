import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-4">{children}</div>
    </>
  );
};

export default layout;
