import React, { useEffect } from "react";
import Product from "./Product";
import ImageSlider from "./ImageSlider";
import GoogleSignInButton from "./Register/RegistrButton";
import MediaImageSlider from "./MediaImageSlider";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="z-1 w-full">
        <ImageSlider />
        <MediaImageSlider />
        <div className="h-[550px] border max-sm:h-80"></div>
        <Product />
        <div className="hidden">
          <GoogleSignInButton />
        </div>
      </div>
    </>
  );
};

export default HomePage;
