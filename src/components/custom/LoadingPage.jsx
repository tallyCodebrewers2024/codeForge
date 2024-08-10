import React from "react";
import { HashLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="h-full w-full grid place-items-center">
      <div className="">
        <HashLoader color="" />
      </div>
    </div>
  );
};

export default LoadingPage;
