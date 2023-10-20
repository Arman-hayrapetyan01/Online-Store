import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateCreditCard } from "../redux/actions";
import GoogleSignInButton from "./Register/RegistrButton";
const Card = () => {
  const userInfo = useSelector((state) => state.auth.user);
  const [task, setTask] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");
  const creditCartInfo = {
    number: creditCardNumber,
    expiry: expiry,
    cvv: cvv,
    name: name,
  };
  document.title = "Midle Store - Credit Card";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChange = (e) => {
    const inputNumber = e.target.value.replace(/\D/g, "");
    if (inputNumber.length <= 16) {
      setCreditCardNumber(inputNumber);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const formatCreditCardNumber = (number) => {
    const formattedNumber = number.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formattedNumber;
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    let formattedValue = value.replace(/\D/g, "");
    if (formattedValue.length > 4) {
      formattedValue = formattedValue.slice(0, 4);
    }
    setExpiry(formattedValue);
  };
  const handleInputChangeCvv = (e) => {
    const { value } = e.target;
    let formattedValue = value.replace(/\D/g, "");
    if (formattedValue.length > 3) {
      formattedValue = formattedValue.slice(0, 3);
    }
    setCVV(formattedValue);
  };
  const formatCreditExpiry = (number) => {
    const formattedNumber = number.replace(/(\d{2})(?=\d)/g, "$1/");
    return formattedNumber;
  };
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [err3, setErr3] = useState(false);
  const [err4, setErr4] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      creditCardNumber !== "" &&
      expiry !== "" &&
      cvv !== "" &&
      expiry.length === 4 &&
      cvv.length === 3
    ) {
      setTask((e) => !e);
      setErr1(false);
      setErr2(false);
      setErr3(false);
      setErr4(false);
      dispatch(updateCreditCard(creditCartInfo));
    }
    if (creditCardNumber.length !== 16) {
      setErr1(true);
    } else {
      setErr1(false);
    }
    if (name.length < 6) {
      setErr2(true);
    } else {
      setErr2(false);
    }
    if (expiry.length !== 4) {
      setErr3(true);
    } else {
      setErr3(false);
    }
    if (cvv.length !== 4) {
      setErr4(true);
    } else {
      setErr4(false);
    }
  };

  const creditCardRegister = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 -mt-24 w-72 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="text-gray-700 text-lg font-semibold mb-4">
            Credit Card
          </div>
          <div className="text-gray-600 text-sm mb-2">Card Number</div>
          <div className="bg-gray-100 p-2 rounded-md mb-4">
            <input
              type="tel"
              value={formatCreditCardNumber(creditCardNumber)}
              onChange={handleChange}
              pattern="[0-9\s]{13,19}"
              autocomplete="cc-number"
              placeholder="Numbers in card"
              className="w-full"
            />
            <p style={err1 ? { display: "block" } : { display: "none" }}>
              Is input invalid
            </p>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <div className="text-gray-600 text-sm mb-2">Name</div>
              <div className="bg-gray-100 p-2 rounded-md mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Cardholder Name"
                  value={name}
                  className="w-full"
                  onChange={handleNameChange}
                />
                <p style={err2 ? { display: "block" } : { display: "none" }}>
                  Is input invalid
                </p>
              </div>
              <div className="text-gray-600 text-sm mb-2">CVV</div>
              <div className="bg-gray-100 p-2 rounded-md mb-4">
                <input
                  type="text"
                  name="cvv"
                  className="w-full"
                  placeholder="CVV"
                  value={cvv}
                  onChange={handleInputChangeCvv}
                />
                <p style={err4 ? { display: "block" } : { display: "none" }}>
                  Is input invalid
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="text-gray-600 text-sm mb-2">Expiration Date</div>
              <div className="bg-gray-100 p-2 rounded-md mb-4">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  // pattern="[0-9\s]{1,10}"
                  value={formatCreditExpiry(expiry)}
                  className="w-full"
                  onChange={handleInputChange}
                />
                <p style={err3 ? { display: "block" } : { display: "none" }}>
                  Is input invalid
                </p>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    );
  };

  const creditCardLogined = () => {
    return (
      <div className="flex justify-center items-center">
        <NavLink
          to={`/user/${
            userInfo.userInfo.FirstName || userInfo.userInfo.googleFirstName
          }/${userInfo.userInfo.LastName || userInfo.userInfo.googleLastName}/${
            userInfo.userInfo.userId || userInfo.googleId
          }`}
          className="inline-block rounded bg-gray-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#101216] transition duration-150 ease-in-out hover:bg-gray-900 hover:shadow-[0_8px_9px_-4px_rgba(24, 25, 26, 0.3),0_4px_18px_0_rgba(3, 13, 28, 0.2)] focus:bg-gray-600 focus:shadow-[0_8px_9px_-4px_rgba(19, 21, 23, 0.2),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-700 "
        >
          Go Back!
        </NavLink>
      </div>
    );
  };

  return (
    <div className=" pt-60  pb-56">
      {task ? creditCardLogined() : creditCardRegister()}
      <div className="hidden">
        <GoogleSignInButton />
      </div>
    </div>
  );
};
export default Card;
