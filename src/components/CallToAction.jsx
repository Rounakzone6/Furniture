import React from "react";
import assets from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  return (
    <div
      className="text-white md:min-h-[60vh] flex items-center justify-center px-4 py-6 bg-cover bg-bottom bg-no-repeat bg-[#2c2f5d] "
      style={{ backgroundImage: `url(${assets.callToAction})` }}
    >
      <div className="flex flex-col md:max-w-[60%] mx-auto items-center gap-6">
        <h2 className="text-4xl text-center font-semibold">
          Easy to setup. <br />
          Easy to maintain
        </h2>
        <p className="text-sm md:max-w-[80%] text-center font-medium text-gray-300">
          Bootstrap is a widely-used, sleek, intuitive and powerful front-end
          framework for faster and easier web development.
        </p>
        <div className="flex justify-center items-center gap-6">
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="text-5xl cursor-pointer bg-white rounded-full text-red-600"
          />
          <button className="px-6 py-2 cursor-pointer rounded-full bg-[#66e5d6] font-medium text-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
