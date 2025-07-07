import React, { useState } from "react";
import assets from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeDropper,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [seePassword, setSeePassword] = useState(true);

  function handleLogin() {
    setIsLogin(!isLogin);
  }
  function handleSeePassword() {
    setSeePassword(!seePassword);
  }

  return (
    <div
      className="text-white flex-col md:flex-row min-h-[80vh] flex items-center justify-center py-6 bg-cover bg-no-repeat bg-[#2f1893]"
      style={{ backgroundImage: `url(${assets.form})` }}
    >
      <div className="max-w-[80%] flex flex-col md:flex-row justify-between items-center">
        <div className="md:max-w-[50%] flex flex-col text-center gap-3 mb-4">
          <h2 className="md:text-4xl text-3xl">
            We solve digital problems with an outstanding creative flare
          </h2>
          <p>
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>
        <div className="border min-w-[40%] rounded-2xl bg-[#FFFFFF] text-black flex flex-col gap-4">
          <div className="flex border-b border-b-gray-300 justify-around items-center p-3 font-medium text-gray-600">
            <p className="cursor-pointer hover:text-black" onClick={handleLogin}>SIGN UP</p>
            <div className="w-px h-8 bg-gray-300" />
            <p className="cursor-pointer hover:text-black" onClick={handleLogin}>LOG IN</p>
          </div>
          <div className="px-6 flex flex-col gap-4">
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="pl-10 pr-6 py-2 border border-gray-400 rounded-full w-full focus:outline-none"
              />
            </div>
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                className="pl-10 pr-6 py-2 border rounded-full w-full border-gray-400 focus:outline-none"
              />
              {seePassword ? (
                <FontAwesomeIcon
                  onClick={handleSeePassword}
                  icon={faEye}
                  className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-700"
                />
              ) : (
                <FontAwesomeIcon
                  onClick={handleSeePassword}
                  icon={faEyeSlash}
                  className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-700"
                />
              )}
            </div>

            {isLogin && (
              <div className="relative w-full">
                <FontAwesomeIcon
                  icon={faLock}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Confirm Password"
                  className="pl-10 pr-6 py-2 border rounded-full w-full border-gray-400 focus:outline-none"
                />
                {seePassword ? (
                  <FontAwesomeIcon
                    onClick={handleSeePassword}
                    icon={faEye}
                    className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-700"
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={handleSeePassword}
                    icon={faEyeSlash}
                    className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-700"
                  />
                )}
              </div>
            )}
          </div>
          {isLogin ? (
            <div className="flex text-gray-50 px-6 pb-6 flex-col gap-3 font-medium">
              <button className="bg-[#25dac5] px-6 py-2 rounded-full cursor-pointer">
                Create an Account
              </button>
              <div className="flex items-center gap-4">
                <div className="flex-grow h-px bg-gray-300" />
                <p className="text-sm text-gray-500">Or</p>
                <div className="flex-grow h-px bg-gray-300" />
              </div>
              <button className="bg-[#1da1f2] px-6 py-2 rounded-full cursor-pointer">
                Sign Up with Google
              </button>
            </div>
          ) : (
            <div className="flex px-6 pb-6 flex-col gap-3 font-medium">
              <button className="bg-[#25dac5] px-6 py-2 rounded-full cursor-pointer">
                Login
              </button>
              <div className="flex items-center gap-4">
                <div className="flex-grow h-px bg-gray-300" />
                <p className="text-sm text-gray-500">Or</p>
                <div className="flex-grow h-px bg-gray-300" />
              </div>
              <button className="bg-[#1da1f2] px-6 py-2 rounded-full cursor-pointer">
                Sign In with Google
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
