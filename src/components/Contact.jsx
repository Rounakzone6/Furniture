import React, { useState } from "react";
import assets from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingShield,
  faEnvelope,
  faEye,
  faEyeDropper,
  faEyeSlash,
  faLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
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
      className="text-white flex-col md:flex-row min-h-[80vh] flex items-center justify-center p-6 bg-cover bg-no-repeat bg-[#2f1893]"
      style={{ backgroundImage: `url(${assets.contact})` }}
    >
      <div className="max-w-[80%] flex flex-col md:flex-row justify-between items-center">
        <div className="md:max-w-[50%] flex flex-col  gap-3 mb-4">
          <h2 className="md:text-4xl text-3xl">Let's Keep in Touch</h2>
          <p>
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
          <p>
            <FontAwesomeIcon className="pr-2" icon={faPhone} />
            +91 7667991277
          </p>
          <p>
            <FontAwesomeIcon className="pr-2" icon={faEnvelope} />
            info@design.com
          </p>
          <p>
            <FontAwesomeIcon className="pr-2" icon={faBuildingShield} />
            BBD University, Lucknow <br />
            Uttar Pradesh (226028)
          </p>
        </div>
        <div className="bg-white flex flex-col gap-6 text-gray-700 p-6 rounded-2xl">
          <div className="flex justify-around items-center gap-2">
            <div>
              <p>YOUR NAME</p>
              <input
                type="text"
                className="border pl-2 py-0.5 rounded-full"
                placeholder="Your Name"
              />
            </div>
            <div>
              <p>BUDGET</p>
              <select className="border px-4 py-1 rounded-full">
                <option value="100">$100</option>
                <option value="200">$200</option>
                <option value="300">$300</option>
                <option value="400">$400</option>
                <option value="500">$500</option>
                <option value="1000">$1000</option>
              </select>
            </div>
          </div>
          <div>
            <p>INPUT FIELD</p>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="border w-full pl-2 py-0.5 rounded-full"
            />
          </div>
          <div>
            <p>YOUR MESSAGE</p>
            <textarea
              name="message"
              placeholder="Type your message..."
              className="border w-full pl-2 py-0.5 rounded-xl"
            />
          </div>
          <div className="flex justify-between items-center">
            <p>
              <input type="checkbox" /> Send me a copy
            </p>
            <button
              className="bg-[#2adbc6] px-10 cursor-pointer font-medium text-gray-50 py-2 rounded-full"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
