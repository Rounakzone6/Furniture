import React, { useEffect, useState } from "react";
import {
  allProduct,
  bestSellers,
  featuredProducts,
  latestProducts,
} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

const OurProducts = () => {
  const [allProducts, setAllProducts] = useState(true);
  const [latestProduct, setLatestProduct] = useState(false);
  const [bestSeller, setBestSeller] = useState(false);
  const [featuredProduct, setFeaturedProduct] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="py-6">
      <div className="flex flex-col md:max-w-[80%] justify-center items-center p-2 mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-yellow-600" />
          <p className="text-lg md:text-xl">Our Products</p>
        </div>
        <p className="text-2xl text-center font-medium md:text-4xl">
          Our <span className="text-[#224A26]">Products Collections</span>
        </p>
        <div>
          <ul className="flex gap-2 items-center justify-center md:gap-4 mt-4">
            <li
              onClick={() => {
                setAllProducts(true);
                setLatestProduct(false);
                setBestSeller(false);
                setFeaturedProduct(false);
              }}
              className={`text-xs md:text-sm px-4 py-2 border cursor-pointer border-gray-200 shadow-md rounded-full transition-all duration-300 ${
                allProducts
                  ? "bg-[#224A26] text-white scale-105"
                  : "hover:bg-[#224A26] hover:text-white"
              }`}
            >
              All Products
            </li>
            <li
              onClick={() => {
                setAllProducts(false);
                setLatestProduct(true);
                setBestSeller(false);
                setFeaturedProduct(false);
              }}
              className={`text-sm px-4 py-2 border cursor-pointer border-gray-200 shadow-md rounded-full transition-all duration-300 ${
                latestProduct
                  ? "bg-[#224A26] text-white scale-105"
                  : "hover:bg-[#224A26] hover:text-white"
              }`}
            >
              Latest Products
            </li>
            <li
              onClick={() => {
                setAllProducts(false);
                setLatestProduct(false);
                setBestSeller(true);
                setFeaturedProduct(false);
              }}
              className={`text-sm px-4 py-2 border cursor-pointer border-gray-200 shadow-md rounded-full transition-all duration-300 ${
                bestSeller
                  ? "bg-[#224A26] text-white scale-105"
                  : "hover:bg-[#224A26] hover:text-white"
              }`}
            >
              Best Sellers
            </li>
            <li
              onClick={() => {
                setAllProducts(false);
                setLatestProduct(false);
                setBestSeller(false);
                setFeaturedProduct(true);
              }}
              className={`text-sm px-4 py-2 border cursor-pointer border-gray-200 shadow-md rounded-full transition-all duration-300 ${
                featuredProduct
                  ? "bg-[#224A26] text-white scale-105"
                  : "hover:bg-[#224A26] hover:text-white"
              }`}
            >
              Featured Products
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-4">
            {(
              (allProducts && allProduct) ||
              (latestProduct && latestProducts) ||
              (bestSeller && bestSellers) ||
              (featuredProduct && featuredProducts)
            ).map((item, index) => (
              <div
                key={index}
                className="border flex flex-col justify-center rounded-2xl p-2 h-[45vh] md:h-[60vh] md:w-[17vw] w-[45vw] hover:scale-101 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-full h-full relative rounded-2xl bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <button className="border absolute right-1 top-1 rounded-full p-1 w-20 md:w-15 bg-gray-200 font-medium">
                    Add
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-xs"
                    />
                  </button>
                  <FontAwesomeIcon
                    icon={fasHeart} 
                    className="text-xl absolute right-3 bottom-2 text-red-500"
                  />
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-800">{item.name}</p>
                  <p className="font-medium flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 pr-1 text-xs"
                    />
                    {item.rating}
                  </p>
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <div className="flex gap-3">
                    <p className="font-medium">${item.offerPrice}</p>
                    <del className="text-gray-500">${item.price}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
