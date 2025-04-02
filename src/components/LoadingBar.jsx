import React from "react";

const LoadingBar = () => {
  return (
    <div className="w-full bg-gray-300 h-2">
      <div className="bg-blue-500 h-2 animate-pulse w-1/2"></div>
    </div>
  );
};

export default LoadingBar;
