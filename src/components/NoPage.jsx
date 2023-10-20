import React, { useEffect } from "react";
import background from "../assets/page-not.png";
import { NavLink } from "react-router-dom";
const NoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="w-full h-screen flex justify-center items-end pb-[85px]   text-6xl page-not-found bg-center bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className=" w-full flex justify-center pr-11 ">
        <NavLink to="/">
          <div className="w-72 shadow-md bg-blue-500 hover:bg-blue-600 font-serif pb-1 text-center rounded-md">
            Go Back
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default NoPage;
