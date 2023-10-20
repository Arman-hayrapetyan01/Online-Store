import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import DropDown from "./Category/DropDownCt";
import Account from "./UserAcount/DropDownAc";
const Header = () => {
  const cartItemScore = useSelector((state) => state.auth.items);
  const userInfo = useSelector((state) => state.auth.user);
  const YesOrNo = useSelector((state) => state.auth);
  const workingTool = Object.values(cartItemScore);
  const [responsiveTool, setResopnsiveTool] = useState(false);
  const handlFocus = () => {
    setTimeout(() => {
      setResopnsiveTool(true);
    }, 1);
  };
  const handlBlur = () => {
    setTimeout(() => {
      setResopnsiveTool(false);
    }, 1);
  };
  return (
    <nav
      className="fixed w-full h-16 pt-1 flex justify-between z-50 bg-craz1 shadow-[0_0_5px_5px_#55dddd85] backdrop-blur-sm 
    max-sm:pr-10 max-sm:pl-5 max-sm:flex-wrap   "
    >
      <div className="flex fixed justify-between z-50 items-center w-full pr-[5%] pl-[5%] max-md:text-sm max-sm:hidden">
        <ul className="w-[25%] flex justify-around pl-14 items-center relative max-md:w-[30%] max-sm:hidden">
          <li>
            <NavLink to="/">
              <img
                className="absolute -left-11 -top-4 w-24 max-md:-left-8"
                src={require("../assets/Header/header_image.png")}
                alt="Header Inage"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white underline" : "text-white"
              }
              to="/products"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white underline" : "text-white"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white underline" : "text-white"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <ul className="max-sm:hidden">
          <DropDown />
        </ul>

        <ul className="flex justify-around items-center w-[25%]  max-sm:hidden">
          <li
            className="w-[30%] text-center"
            style={YesOrNo.loginEd ? { display: "none" } : { display: "block" }}
          >
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-white underline" : "text-white"
              }
            >
              Login
            </NavLink>
          </li>

          <li
            className="w-[30%] text-center"
            style={YesOrNo.loginEd ? { display: "none" } : { display: "block" }}
          >
            <NavLink
              to="/signIn"
              className={({ isActive }) =>
                isActive ? "text-white underline" : "text-white"
              }
            >
              Sign In
            </NavLink>
          </li>

          <li className="w-[30%] text-center relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-white flex" : "text-white flex"
              }
            >
              {workingTool.length !== 0 && (
                <div className=" absolute w-[18px] h-[15px] rounded-[50%] right-6 text-sm ">
                  {workingTool.length}
                </div>
              )}
              Cart{" "}
              <AiOutlineShoppingCart className="text-[40px] absolute top-[-5px] right-[20%]" />{" "}
              {workingTool.length === 0 && <i></i>}
            </NavLink>
          </li>
          {YesOrNo.loginEd ? (
            <li>
              <NavLink
                to={`/user/${
                  userInfo.userInfo.FirstName ||
                  userInfo.userInfo.googleFirstName
                }/${
                  userInfo.userInfo.LastName || userInfo.userInfo.googleLastName
                }/${userInfo.userInfo.userId || userInfo.userInfo.googleId}`}
              >
                <div className=" pl-3  text-white text-shadow-xuy  text-3xl"></div>
                <div className="pl-5">
                  <Account />
                </div>
              </NavLink>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>

      <div className="w-24 relative sm:hidden">
        <NavLink to="/">
          <img
            className=" absolute -top-2"
            src={require("../assets/Header/header_image.png")}
            alt="Header Inage"
          />
        </NavLink>
      </div>

      <button
        className=" text-3xl  sm:hidden"
        onClick={() => setResopnsiveTool((event) => !event)}
        onFocus={handlFocus}
        onBlur={handlBlur}
      >
        {responsiveTool ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <div
        style={{ transition: "0.5s" }}
        className={
          responsiveTool
            ? "top-16  absolute bg-black w-full right-0"
            : "top-16 absolute w-0 -right-28"
        }
      >
        <div className="flex justify-around flex-col">
          <ul className="flex justify-around flex-wrap mt-9 text-2xl">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white underline" : "text-white"
                }
                to="/products"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white underline" : "text-white"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white underline" : "text-white"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <ul className="text-white text-center flex justify-around mt-9 flex-wrap">
            <li>Categories</li>
            <li className=" mt-5 flex justify-between w-full">
              <li className="border rounded-md">
                <NavLink to="/category/men'sclothing">Mens Clothing</NavLink>
              </li>
              <li className="border rounded-md">
                <NavLink to="/category/electronics">Electrnoic</NavLink>
              </li>
              <li className="border rounded-md">
                <NavLink to="/category/jewelery">Jewelery</NavLink>
              </li>
              <li className="border rounded-md">
                <NavLink to="/category/women'sclothing">
                  Woomens Clothing
                </NavLink>
              </li>
            </li>
          </ul>

          <ul className="flex w-full justify-around flex-wrap items-center mt-9 ">
            <li
              className=" text-center"
              style={
                YesOrNo.loginEd ? { display: "none" } : { display: "block" }
              }
            >
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-white underline" : "text-white"
                }
              >
                Login
              </NavLink>
            </li>

            <li
              className=" text-center"
              style={
                YesOrNo.loginEd ? { display: "none" } : { display: "block" }
              }
            >
              <NavLink
                to="/signIn"
                className={({ isActive }) =>
                  isActive ? "text-white underline" : "text-white"
                }
              >
                Sign In
              </NavLink>
            </li>

            <li className="text-center relative">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-white flex" : "text-white flex"
                }
              >
                {workingTool.length !== 0 && (
                  <p className="absolute rounded-full right-6 text-sm max-sm:left-11">
                    {workingTool.length}
                  </p>
                )}
                Cart{" "}
                <AiOutlineShoppingCart className="text-[40px] absolute top-[-5px] right-[20%] max-sm:left-8" />{" "}
                {workingTool.length === 0 && <i></i>}
              </NavLink>
            </li>
            {YesOrNo.loginEd ? (
              <li>
                <NavLink
                  to={`/user/${
                    userInfo.FirstName || userInfo.googleFirstName
                  }/${userInfo.LastName || userInfo.googleLastName}/${
                    userInfo.id || userInfo.googleId
                  }`}
                >
                  <div className=" pl-3  text-white text-shadow-xuy  text-3xl"></div>
                  <div className="pl-5">
                    <Account />
                  </div>
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
