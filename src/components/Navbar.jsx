import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCartShopping,
  faF,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-200">
      <div className="bg-[#204a25]">
        <div className="md:max-w-[80%] px-3 mx-auto">
          <div className="flex flex-col md:flex-row gap-1 justify-between py-1">
            <p className="text-gray-100 text-xs md:text-sm">
              Call Us:{" "}
              <span className="hover:underline cursor-pointer">
                +123-456-789
              </span>
            </p>
            <p className="text-gray-200 text-xs md:text-sm">
              Sign up and GET 25% OFF for your first order.{" "}
              <span className="underline text-yellow-500 hover:text-yellow-600 cursor-pointer">
                Sign up now
              </span>
            </p>
            <ul className="flex gap-1">
              <li>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="py-1 px-1.5 text-xs md:text-sm cursor-pointer hover:bg-yellow-600 rounded-full bg-yellow-500"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="py-1 px-1 text-xs md:text-sm cursor-pointer hover:bg-yellow-600 rounded-full bg-yellow-500"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPinterestP}
                  className="py-1 px-1.5 text-xs md:text-sm cursor-pointer hover:bg-yellow-600 rounded-full bg-yellow-500"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="py-1 px-1.5 text-xs md:text-sm cursor-pointer hover:bg-yellow-600 rounded-full bg-yellow-500"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="py-1 px-1 text-xs md:text-sm cursor-pointer hover:bg-yellow-600 rounded-full bg-yellow-500"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center md:max-w-[80%] mx-auto p-2 md:py-4">
        <Link to="/" className="flex items-center justify-center gap-1">
          <FontAwesomeIcon
            icon={faF}
            className="px-2 py-1.5 rounded-full text-yellow-500 bg-[#224A26]"
          />
          <p className="text-xl text-[#224A26] md:text-2xl">Furniture.</p>
        </Link>
        <ul className="hidden md:flex gap-4">
          <NavLink to="/">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/shop">
            <p>Shop</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/categories">
            <p>Categories</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about">
            <p>About Us</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact">
            <p>Contact Us</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/blog">
            <p>Blog</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li className="md:hidden cursor-pointer">
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
