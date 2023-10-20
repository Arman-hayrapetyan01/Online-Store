import React from "react";
// import GoogleSignInButton from './Register/RegistrButton'
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsFillTelephoneFill,
} from "react-icons/bs";
import ProductListing from "./Data";
import { BiHomeAlt, BiSolidEnvelope, BiSolidPrinter } from "react-icons/bi";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <footer className=" flex-auto bg-gray-400 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <Link
            target="_blank"
            to="https://www.facebook.com/MidleStore/?locale=ru_RU"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <BsFacebook />
          </Link>
          <Link
            target="_blank"
            to="https://www.instagram.com/midle_store/"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <BsInstagram />
          </Link>
          <Link
            target="_blank"
            to="https://www.youtube.com/channel/UCBZagkVBv7vzDgvEC3fj_1Q"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
          >
            <BsYoutube />
          </Link>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Tailwind ELEMENTS
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Angular</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">React</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Vue</a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200">Laravel</a>
            </p>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Pricing</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Settings</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Orders</a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200">Help</a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <BiHomeAlt />
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <BiSolidEnvelope /> info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <BsFillTelephoneFill />+ 01 234 567 88
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <BiSolidPrinter />+ 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-600 p-6 text-center text-gray-200">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold" href="https://tailwind-elements.com/">
          Tailwind Elements
        </a>
      </div>
      <div className="hidden">
        <ProductListing />
      </div>
      {/* <GoogleSignInButton /> */}
    </footer>
  );
};
export default footer;
