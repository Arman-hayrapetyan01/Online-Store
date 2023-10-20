import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MediaImageSlider = () => {
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
  return (
    <div className="absolute z-1 w-full h-72 pt-8 rounded-xl bg-[#ffffff93] top-24 hidden max-sm:block">
      <Slider {...settings} className=" h-52 ">
        <div className="w-full relative rounded-2xl">
          <div
            className="border border-transparent  w-full h-[200px] rounded-sm"
            style={{
              backgroundImage: images.img1,
              backgroundSize: "cover",
            }}
          >
            <div className=" backdrop-blur-[1px] h-full pt-5 shadow-[0px_0px_50px_5px_#000] bg-[#00000093]">
              <h1 className="text-center text-3xl text-white drop-shadow text-shadow-xuy">
                Sartorial Confidence: Achieved 🧥💼
              </h1>
              <h3 className="mt-10 text-white">
                Mastering the art of dressing well and exuding an aura of
                confidence that turns heads wherever I go.
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full relative rounded-2xl">
          <div
            className="border border-transparent w-full h-[200px] rounded-sm"
            style={{
              backgroundImage: images.img2,
              backgroundSize: "cover",
            }}
          >
            <div className=" backdrop-blur-[1px] shadow-[0px_0px_50px_5px_#000] bg-[#00000093]">
              <h1 className="text-center text-3xl text-white drop-shadow text-shadow-xuy">
                Adorning Elegance
                <p>💍💎</p>
              </h1>
              <h3 className="mt-10 text-white">
                Embarking on a journey to find the perfect pieces that will add
                a touch of enchantment to my every lo
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full relative rounded-2xl">
          <div
            className="border border-transparent  w-full h-[200px] rounded-sm"
            style={{
              backgroundImage: images.img3,
              backgroundSize: "cover",
            }}
          >
            <div className=" backdrop-blur-[1px] shadow-[0px_0px_50px_5px_#000] bg-[#00000093]">
              <h1 className="text-center text-3xl text-white drop-shadow text-shadow-xuy">
                Technology
                <p>📱💻</p>
              </h1>
              <h3 className="mt-10 text-white">
                Satisfy your cravings for tech gadgets! Discover amazing deals
                on electronics that you won't want to miss.
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full relative rounded-2xl">
          <div
            className="border border-transparent  w-full h-[200px] rounded-sm"
            style={{
              backgroundImage: images.img4,
              backgroundSize: "cover",
            }}
          >
            <div className=" backdrop-blur-[1px] shadow-[0px_0px_50px_5px_#000] bg-[#00000093]">
              <h1 className="text-center text-3xl text-white drop-shadow text-shadow-xuy">
                Seasonal offer
                <p>👗👠</p>
              </h1>
              <h3 className="mt-10 text-white">
                Unveiling the season's hottest trends! Explore our collection
                and upgrade your style game today.
              </h3>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MediaImageSlider;
