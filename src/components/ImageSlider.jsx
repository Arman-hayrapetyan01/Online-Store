import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
const ImageSlider = () => {
  const images = {
    img1: "url(https://wallpaperaccess.com/full/1448064.jpg)",
    img2: "url(https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?cs=srgb&dl=pexels-lalesh-aldarwish-168927.jpg&fm=jpg)",
    img3: "url(https://wallpapercave.com/wp/wp7793884.jpg)",
    img4: "url(https://wallpaperaccess.com/full/2122992.jpg)",
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };
  const slider = useRef(null);
  return (
    <div className="absolute z-1 w-full -top-[62px] max-sm:hidden max-md:-top-[15px]">
      <button
        className="opacity-60 h-full text-white text-8xl  top-0 cursor-pointer z-30  absolute"
        onClick={() => slider?.current?.slickPrev()}
      >
        <BiSolidLeftArrow />
      </button>
      <Slider ref={slider} {...settings} className="z-1 mt-[10%] h-[500px]">
        <div className="w-full h-[600px] overflow-hidden rounded-[1px] shadow-[0 10px 20px #00000033]  text-white  z-[-10]">
          <div className="w-full bg-white relative">
            <div
              className="border border-transparent w-full h-[500px] rounded-sm SBP-50 max-md:SBP-102"
              style={{
                backgroundImage: images.img1,
                backgroundSize: "cover",
                // backgroundPositionY: "-50px",
              }}
            >
              <div className="w-96 h-72 mt-20 ml-auto mr-36 backdrop-blur-[2px] shadow-[0px_0px_50px_5px_#000] rounded-2xl">
                <h1 className="text-center text-3xl text-black drop-shadow text-shadow-xuy">
                  Sartorial Confidence: Achieved 🧥💼
                </h1>
                <h3 className="mt-10 text-black text-2xl">
                  Mastering the art of dressing well and exuding an aura of
                  confidence that turns heads wherever I go.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[600px] overflow-hidden rounded-[1px] shadow-[0 10px 20px #00000033]  text-white  z-[-10]">
          <div className="w-full bg-white relative">
            <div
              className="border border-transparent w-full h-[500px] rounded-sm bg-center"
              style={{
                backgroundImage: images.img2,
                backgroundSize: "cover",
              }}
            >
              <div className="w-96 h-72 mt-20 ml-24 bg-teal-900 shadow-[0px_0px_20px_15px_#3a3a3ad3] rounded-2xl">
                <h1 className="text-center text-3xl text-black drop-shadow text-shadow-xuy">
                  Adorning Elegance 💍✨
                </h1>
                <h3 className="mt-10 text-2xl text-black">
                  Embarking on a journey to find the perfect pieces that will
                  add a touch of enchantment to my every look.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[600px] overflow-hidden rounded-[1px] shadow-[0 10px 20px #00000033]  text-white  z-[-10]">
          <div className="w-full bg-white relative">
            <div
              className="border border-transparent w-full h-[500px] rounded-sm SBP-10 max-md:SBP-102"
              style={{
                backgroundImage: images.img3,
                backgroundSize: "cover",
                // backgroundPositionY: "-10px",
              }}
            >
              <div className="w-96 h-72 mt-20 ml-40 bg-[#ffffff1e] shadow-[0px_0px_30px_5px_#000] backdrop-blur-sm rounded-2xl">
                <h1 className="text-center text-3xl text-black drop-shadow text-shadow-xuy">
                  Technology 📱💻
                </h1>
                <h3 className="mt-10 text-black text-2xl">
                  Satisfy your cravings for tech gadgets! Discover amazing deals
                  on electronics that you won't want to miss.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[600px] overflow-hidden rounded-[1px] shadow-[0 10px 20px #00000033]  text-white  z-[-10]">
          <div className="w-full bg-white relative">
            <div
              className="border border-transparent w-full h-[500px] rounded-sm SBP-90 max-md:SBP-102"
              style={{
                backgroundImage: images.img4,
                backgroundSize: "cover",
              }}
            >
              <div className="w-96 h-72 mt-20 ml-28 shadow-[0px_0px_30px_5px_#00000096] bg-[#ffffff1e] backdrop-blur-sm rounded-2xl">
                <h1 className="text-center text-3xl text-black drop-shadow text-shadow-xuy">
                  Seasonal offer 👗👠
                </h1>
                <h3 className="mt-10 text-black text-2xl">
                  Unveiling the season's hottest trends! Explore our collection
                  and upgrade your style game today.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <button
        className="h-full opacity-60 text-8xl top-0 right-0 cursor-pointer z-30 text-white absolute"
        onClick={() => slider?.current?.slickNext()}
      >
        <BiSolidRightArrow />
      </button>
    </div>
  );
};

export default ImageSlider;
