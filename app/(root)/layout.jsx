import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="p-10">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
