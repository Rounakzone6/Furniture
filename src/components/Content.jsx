import React from "react";
import assets from "../assets";

const Content = () => {
  return (
    <div
      className="text-white min-h-[80vh] flex items-center justify-center px-4 py-6 bg-cover bg-no-repeat bg-[#1c1251] "
      style={{ backgroundImage: `url(${assets.content})` }}
    >
      <div className="flex flex-col md:max-w-[60%] mx-auto items-center gap-6">
        <p className="text-gray-400 font-bold text-xl">FREE SAMPLE</p>
        <h2 className="text-5xl text-center font-semibold">
          Powerful Generator and Free Figma Sources
        </h2>
        <p className="text-sm md:max-w-[80%] text-center font-medium text-gray-300">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design. All of the components are
          made in the same style, and can easily be integrated into projects,
          allowing you to create hundreds of solutions.
        </p>
      </div>
    </div>
  );
};

export default Content;
