import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { registerSuccess } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import GoogleSignInButton from "./RegistrButton";
import { gapi } from "gapi-script";
// import { NavLink } from "react-router-dom";
const clientId =
  "444264339498-60ee2lf46tm1msnrr0iirfski42qlsq8.apps.googleusercontent.com";
export default function Register() {
  const [firstName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const tiv = useSelector((state) => state.auth.loginEd);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [randomId, setRandomId] = useState(generateRandomId());
  function generateRandomId() {
    const characters =
      "[A-N|P-Z|1-9]{10}";
    const idLength = 30;
    let result = "";
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  const regenerateRandomId = () => {
    setRandomId(generateRandomId());
  };
  const onSubmit = (data) => {
    regenerateRandomId();
    localStorage.setItem("UserInfo", JSON.stringify(data));
    const user = {
      userId: randomId,
      emailt: email,
      FirstName: firstName,
      LastName: lastName,
      Password: password,
    };
    setEmail("");
    setFirsName("");
    setLastName("");
    setPassword("");
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      dispatch(registerSuccess(user));
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    function Start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", Start);
  });

  const [bool, setBool] = useState(false);
  return (
    <div className="h-screen pt-16">
      {tiv ? (
        <div className="text-center mt-24 text-5xl">
          <h1>Thanks for registration!!</h1>
          {/* <NavLink to='/login'>Login</NavLink> */}
        </div>
      ) : (
        <div className="w-4/12 mt-5 backdrop-blur-sm bg-[#ffffff96] rounded-2xl p-3 m-auto max-sm:w-96 max-[450px]:w-full max-md:w-1/2">
          <div className="flex justify-between pl-5 pr-5  rounded-md h-auto items-center">
            <div>
              <h1>Google Sign In</h1>
            </div>
            <div>
              <GoogleSignInButton />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("Name", { required: true, maxLength: 20 })}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirsName(e.target.value)}
              aria-invalid={errors.Name ? true : false}
              className="w-full outline-none bg-[#00000096] pl-4 mt-[20px] h-[40px] rounded-md"
            />

            {errors.Name?.type === "required" && (
              <p role="alert">Name is required</p>
            )}

            <input
              {...register("Username", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              aria-invalid={errors.Username ? "true" : "false"}
              value={lastName}
              className="w-full outline-none bg-[#00000096] pl-4 mt-[20px] h-[40px] rounded-md"
            />
            {errors.Username?.type === "required" && (
              <p role="alert">Username is required</p>
            )}

            <input
              {...register("Email", { required: "Email is required" })}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              aria-invalid={errors.mail ? "true" : "false"}
              className="w-full outline-none bg-[#00000096] pl-4 mt-[20px] h-[40px] rounded-md"
            />
            {errors.Email?.type === "required" && (
              <p role="alert">Username is required</p>
            )}

            <div className="flex mt-4 justify-between items-center ">
              <div className="w-[90%]">
                <input
                  {...register("Password", {
                    required: "Password is required",
                  })}
                  placeholder="Password"
                  aria-invalid={errors.mail ? "true" : "false"}
                  onChange={(e) => setPassword(e.target.value)}
                  type={bool ? "text" : "password"}
                  value={password}
                  className="w-full pl-4 bg-[#00000096] outline-none  h-[40px] rounded-md"
                />
                {errors.Password?.type === "required" && (
                  <p role="alert">Password is required</p>
                )}
              </div>
              <div
                className="w-12 h-12 border-[1px] -mt-5 ml-1 border-black rounded-full bg-black text-white flex justify-center text-2xl cursor-pointer items-center"
                onClick={() => setBool((e) => !e)}
              >
                {bool ? <BsEyeSlashFill /> : <BsEyeFill />}
              </div>
            </div>

            <button className="w-24 h-10 text-[25px] mt-2 rounded-[10px] bg-[#797585] transition duration-150 ease-in-out hover:bg-black hover:text-white ">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}