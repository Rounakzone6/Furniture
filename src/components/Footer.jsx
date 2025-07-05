import {
  faFacebook,
  faInstagram,
  faPinterestP,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faF } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#224A26]">
      <div className="px-2 py-4 mx-auto md:max-w-[80%] flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-col gap-2 md:w-[40%]">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faF}
              className="py-2.5 px-3.5  bg-yellow-500 rounded-full"
            />
            <p className="text-white text-2xl font-medium">Forniture.</p>
          </div>
          <p className="text-lg font-medium text-white">
            Crafted for Comfort. Designed for Life.
          </p>
          <p className="text-sm text-white">
            At Furniture. we design and deliver high-quality furniture that adds
            beauty and comfort to every space. Whether you're furnishing your
            living room, bedroom, or workspace, our pieces are made to last —
            with craftsmanship you can feel and style you’ll love.
          </p>
          <ul className="flex gap-1.5">
            <li>
              <FontAwesomeIcon
                icon={faFacebook}
                className="p-1 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-300"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTwitter}
                className="p-1 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-300"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPinterestP}
                className="p-1 px-1.5 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-300"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className="p-1 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-300"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faYoutube}
                className="p-1 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-300"
              />
            </li>
          </ul>
        </div>
        <div className="flex text-gray-300 text-xs md:text-sm gap-3 md:gap-4">
          <div>
            <p className="text-white text-[15px] md:text-xl font-medium mb-7 md:mb-2">
              Company
            </p>
            <ul className="flex flex-col gap-2">
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                About us
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                Blog
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                Career
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white text-[15px] md:text-lg font-medium mb-2">
              Curstomer Services
            </p>
            <ul className="flex flex-col gap-2">
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                My Account
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer text-xs md:text-sm">
                Track Your Order
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                Return
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white text-[15px] md:text-xl font-medium mb-2">
              Our Information
            </p>
            <ul className="flex flex-col gap-2">
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                Privacy
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer text-xs md:text-sm">
                User Terms & Conditions
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                Return Policy
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white text-[15px] md:text-xl font-medium mb-7 md:mb-2">
              Contact Info
            </p>
            <ul className="flex flex-col gap-2">
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                +0123-456-789
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer">
                furniture@gmail.com
              </li>
              <li className="hover:underline hover:text-gray-200 cursor-pointer text-xs md:text-sm">
                BBD University, Lucknow <br />
                Uttar Pradesh (220056)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 text-sm text-gray-800">
        <div className="flex items-center justify-between p-2 md:max-w-[80%] mx-auto py-3">
          <p>
            Copyright &copy; 2025{" "}
            <span className="cursor-pointer hover:underline hover:text-[#224A26]">
              Furniture.
            </span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex gap-2">
            <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <div className="w-px h-6 bg-gray-950" />
            <select>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
