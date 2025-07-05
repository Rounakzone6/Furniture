import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="md:max-w-[80%] mx-auto text-center p-2 flex gap-4 items-center justify-center flex-col">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-yellow-600" />
          <p className="text-xl">Our NewsLetter</p>
        </div>
        <p className="text-3xl font-medium md:text-4xl">
          Subscribe to Our Newsletter to Get <br />
          <span className="text-[#224A26]">
            Updates to Our Latest Collection
          </span>
        </p>
        <p>
          Get 20% Off on your first order just by subscribing to our newsletter
        </p>
        <div className="flex gap-4">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="p-2 ml-1 bg-[#224A26] absolute z-2 rounded-full text-white"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-white relative rounded-full p-2 pl-10"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-6 cursor-pointer bg-yellow-500 rounded-full"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
