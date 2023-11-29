import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      {children}
    </div>
  );
};

export default layout;
