import React, { useState } from "react";
import Slider from "react-slick";
import { login } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faF } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Path from "../components/Path";
import Service from "../components/Service";

const Login = () => {
  const [haveAccount, sethaveAccount] = useState(true);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 px-2">
      <Path path1="LogIn" path2="Home" path3="Sign In" />
      <div className="md:max-w-[80%] my-6 flex-wrap md:flex-nowrap gap-4 mx-auto flex">
        <div className="flex mx-auto bg-white flex-col md:w-[50%] border border-gray-200 shadow-md p-4 rounded-2xl">
          <div className="flex gap-1 items-center justify-center mb-2">
            <FontAwesomeIcon
              icon={faF}
              className="text-lg md:text-2xl font-bold py-2 px-3 rounded-full bg-[#224A26] text-yellow-600"
            />
            <p className="text-2xl md:text-3xl font-medium text-[#224A26]">
              Forniture.
            </p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-medium">
              {haveAccount ? "Sign In" : "Sign Up"}
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              {haveAccount
                ? "Please fill your detail to access your account."
                : "Fill your information below or register with your social account"}
            </p>
          </div>
          <form className="flex flex-col gap-2 mt-4">
            {!haveAccount && (
              <div className="flex gap-2 flex-wrap w-full">
                <div>
                  <p>
                    First Name<span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="px-2 w-39 md:w-56 py-2 border rounded-full "
                  />
                </div>
                <div>
                  <p>
                    Last Name<span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="px-2 w-39 md:w-57 py-2 border rounded-full"
                  />
                </div>
              </div>
            )}
            <div>
              <p>
                Email<span className="text-red-500">*</span>
              </p>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="px-3 py-2 w-full border rounded-full"
              />
            </div>
            <div>
              <p>
                Password<span className="text-red-500">*</span>
              </p>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="px-3 py-2 w-full border rounded-full"
              />
            </div>
            {haveAccount && (
              <div className="flex justify-between">
                <p className="flex items-center">
                  <input type="checkbox" className="mr-1" name="remember" />
                  Remember me
                </p>
                <p className="underline font-medium text-[#224A26]">
                  Forgot Password?
                </p>
              </div>
            )}
            <div className="my-3">
              <button
                className="w-full rounded-full py-2 bg-[#224A26] font-medium text-gray-300"
                type="submit"
              >
                {haveAccount ? "Sign In" : "Sign Up"}
              </button>
              <div className="flex items-center gap-4">
                <div className="flex-grow h-px bg-gray-300" />
                <p className="text-sm text-gray-500">Or</p>
                <div className="flex-grow h-px bg-gray-300" />
              </div>
              <button
                className="w-full flex items-center justify-center gap-1 rounded-full py-2  bg-gray-100"
                type="submit"
              >
                <FontAwesomeIcon icon={faGoogle} className="text-gray-500" />
                {haveAccount ? (
                  <p>Sign In With Google</p>
                ) : (
                  <p>Sign Up With Google</p>
                )}
              </button>
              <p>
                {haveAccount
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span
                  className="text-[#224A26] underline cursor-pointer"
                  onClick={() => sethaveAccount(!haveAccount)}
                >
                  {haveAccount ? "Sign Up" : "Sign In"}
                </span>
              </p>
            </div>
          </form>
        </div>
        <Slider
          {...settings}
          className="md:w-[40%] w-[90%] mx-auto rounded-2xl"
        >
          {login.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[50vh] md:h-[85vh] rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 md:p-3">
                <p className="text-xs text-gray-200 md:text-sm">{item.about}</p>
                <p className="text-sm md:text-lg font-semibold">{item.name}</p>
                <p className="text-xs md:text-sm text-gray-300">{item.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="max-w-[80%] mx-auto px-2">
      <Service />
      </div>
    </div>
  );
};

export default Login;
