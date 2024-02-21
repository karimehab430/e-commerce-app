import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Hero = ({ onShopNowClick }) => {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center text-black hero">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="sm:hidden bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-full absolute inset-0"></div>
      <img
        className="object-cover object-center w-full h-full hidden sm:block"
        src="ezgif-4-4e9509957a.jpg"
        alt="Hero Background"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto sm:text-center lg:text-left">
          <h1 className="text-4xl sm:text-8xl font-bold mb-4 uppercase sm:mb-8 text-[#f4f4f4]">
            Welcome to Our Online Store
          </h1>
          <p className="text-lg mb-4 sm:mb-8 font-medium text-[#f4f4f4]">
            Discover the <span className="text-orange-500">Newest Trend</span>{" "}
            in Fashion
          </p>
          <div className="flex justify-center items-center lg:block">
            <Link
              to={"/"}
              onClick={onShopNowClick}
              className="bg-black text-[#f4f4f4] py-2 px-4 rounded-md text-xl font-semibold w-40 flex items-center"
            >
              Shop Now
              <BsArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
