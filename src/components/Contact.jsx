import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactUsLogic } from "../redux/actions/index";
const ContactPage = () => {
  const contactUsWorkTool = useSelector((state) => state.auth.contactUsInfo);
  const dispatch = useDispatch();
  const [cName, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [cEmail, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [cMessage, setMessage] = useState("");
  const [messegeError, setMessegeError] = useState(false);
  const contactUsInfo = {
    cName,
    cEmail,
    cMessage,
  };
  document.title = "Midle Store - Contact";
  const handleSubmit = (event) => {
    event.preventDefault();
    if (cName === "" && isNaN(cName)) {
      setNameError(true); 
    } else setNameError(false);
    if (cEmail === "") {
      setEmailError(true);
    } else setEmailError(false);
    if (cMessage.length < 20 && cMessage === "") {
      setMessegeError(true);
    } else setMessegeError(false);
    if (cName !== "" && cEmail !== "" && cMessage !== "") {
      dispatch(contactUsLogic(contactUsInfo));
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactComp = () => {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="bg-[#1b052993] shadow-md rounded px-8 py-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2 "
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
              />
              <p className={nameError ? "block text-white" : "hidden"}>
                Name Input invaild
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
              />
              <p className={emailError ? "block text-white" : "hidden"}>
                Email Input invaild
              </p>
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="4"
              />
              <p className={messegeError ? "block text-white" : "hidden"}>
                Messege Input invaild
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const contactFinshComp = () => {
    return (
      <div className="w-full h-screen flex justify-center items-center text-3xl">
        <h1>Thanks for your feedback</h1>
      </div>
    );
  };
  return (
    <>
      {contactUsWorkTool.length !== 0 && contactFinshComp()}
      {contactUsWorkTool.length === 0 && contactComp()}
    </>
  );
};

export default ContactPage;
