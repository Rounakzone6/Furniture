import React from "react";
import assets from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import TextSlider from "./TextSlider";

const LandingPage = () => {
  return (
    <div
      className="flex text-white flex-col pr-10 min-h-[80vh] items-center justify-between py-6 gap-10 bg-cover bg-no-repeat bg-[#1c1251] "
      style={{ backgroundImage: `url(${assets.features})` }}
    >
      <ul className="flex pl-8 mx-auto gap-5 md:gap-10">
        <li className="hover:text-purple-300">Home</li>
        <li className="hover:text-purple-300">Features</li>
        <li className="hover:text-purple-300">Pricing</li>
        <li className="hover:text-purple-300">Blog</li>
        <li className="hover:text-purple-300">
          <FontAwesomeIcon icon={faGlobe} />
        </li>
        <li className="hover:text-purple-300">Me</li>
      </ul>
      <div>
        <TextSlider />
      </div>
      <button className="px-8 cursor-pointer py-3 rounded-full bg-[#2f1893] text-white font-medium">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
