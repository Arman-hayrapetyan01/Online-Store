import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import GoogleSignInButton from "../Register/RegistrButton";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Card from "./AnimCard";
const UserAcount = () => {
  const userInfo = useSelector((state) => state.auth.user);
  const userCardInfo = useSelector((state) => state.auth.creditCardInfo);
  document.title = "Midle Store - User Account";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen mt-3">
      <div className="relative top-14">
        <div>
          <div className="text-4xl pl-7">
            <h1>
              <b>Your information</b>
            </h1>
          </div>
          {userInfo.length === 0 && (
            <div>
              <h1>Loading User Inforamtion!!</h1>
            </div>
          )}
          {userInfo.length !== 0 && (
            <div className="flex justify-around">
              <div className="text-center">
                <h3>Name</h3>
                <p>
                  {userInfo.userInfo.googleLastName ||
                    userInfo.userInfo.FirstName}
                </p>
              </div>
              <div className="text-center">
                <h3>LastName</h3>
                <p>
                  {userInfo.userInfo.googleFirstName ||
                    userInfo.userInfo.LastName}
                </p>
              </div>
              <div className="text-center">
                <h3>Email</h3>
                <h3>
                  {userInfo.userInfo.googleEmail || userInfo.userInfo.emailt}
                </h3>
              </div>
            </div>
          )}
        </div>
        <div className="mt-7 pl-7">
          <div className="text-4xl">
            <h1>
              <b>Payment Methods</b>
            </h1>
          </div>
          {userCardInfo.length !== 0 && <Card />}
          {userCardInfo.length === 0 && (
            <NavLink to="/payment/method/card">
              <button className="p-8 border pr-14 mt-2 pl-14 border-neutral-600 rounded-lg">
                <div className="pl-4 text-2xl">
                  <BsCreditCard2BackFill />
                </div>
                Link card
              </button>
            </NavLink>
          )}
        </div>

        {/* <div className="hidden">
          <GoogleSignInButton />
        </div> */}
      </div>
    </div>
  );
};
// https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg
export default UserAcount;
