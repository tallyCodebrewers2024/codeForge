import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <FaExclamationTriangle size={100} className="text-red-500" />
      <h1 className="text-4xl mt-4">404 - Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
