import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu } from "@headlessui/react";
const CategoryPage = () => {
  const categoryInfo = useSelector((state) => state.categoryInfo.info);
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      {categoryInfo.map((e, i) => {
        return (
          <NavLink to={`/category/${e.replace(" ", "")}`} key={i}>
            <li className="text-center h-12 w-44 pt-2 hover:text-white hover:bg-[#1e1a20] bg-[#fff]  transition duration-150 ease-in-out rounded-[10px] ">
              <Menu>{capitalizeFirst(e)}</Menu>
            </li>
          </NavLink>
        );
      })}
    </>
  );
};

export default CategoryPage;
