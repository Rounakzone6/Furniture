import React from "react";
import assets from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDiamond, faGem } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div
      className="flex md:flex-row flex-col pr-10 min-h-[80vh] items-center justify-between py-6 gap-10 bg-cover bg-no-repeat bg-[#1c1251] "
      style={{ backgroundImage: `url(${assets.features})` }}
    >
      <div className="relative w-fit mx-auto">
        <img
          className="bg-transparent h-80 w-80"
          src={assets.laptop}
          alt="Laptop"
        />
        <img
          width={240}
          className="absolute top-0 left-0 z-20"
          src={assets.screen}
          alt="Screen overlay"
        />
      </div>
      <div className="text-white flex flex-col gap-4 w-[80%] md:w-[60vw]">
        <div>
          <h2 className="text-3xl font-medium">We Create Something New</h2>
          <p className="text-md">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="border border-gray-600 shadow-2xl rounded-2xl px-4 py-6">
            <FontAwesomeIcon icon={faCopy} className="text-2xl" />
            <p className="font-medium text-sm mt-2">30 New feature pages</p>
            <p className="text-xs md:text-sm text-gray-300 mt-4">
              Startup Framework contains components and complex blocks which can
              easily.{" "}
            </p>
          </div>
          <div className="border border-gray-600 shadow-2xl rounded-2xl py-6 px-4">
            <FontAwesomeIcon icon={faGem} className="text-2xl" />
            <p className="font-medium text-sm mt-2">Useful Symbol Components</p>
            <p className="text-xs md:text-sm text-gray-300 mt-4">
              Samples will show you the feeling on how to play around using the
              components.
            </p>
          </div>
        </div>
      </div>
      <div className="mr-10">
        <ul className="flex md:flex-col gap-1">
          <li className="w-2 h-2 border-white border rounded-full bg-white"></li>
          <li className="w-2 h-2 border-white border rounded-full"></li>
          <li className="w-2 h-2 border-white border rounded-full"></li>
          <li className="w-2 h-2 border-white border rounded-full"></li>
          <li className="w-2 h-2 border-white border rounded-full"></li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
