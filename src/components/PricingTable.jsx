import React from "react";
import assets, { plans } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PricingTable = () => {
  return (
    <div
      className="flex items-center justify-center px-4 py-6 bg-cover bg-no-repeat bg-[#1c1251] "
      style={{ backgroundImage: `url(${assets.content})` }}
    >
      <div className="text-center max-w-[80%]">
        <h2 className="text-4xl text-white mb-3 font-bold">Plans & Pricing</h2>
        <p className="text-md text-gray-100 mb-5">
          Startup Framework is free forever — you only pay for custom domain
          hosting or to export your site.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border cursor-pointer hover:scale-101 transition-all duration-500 border-gray-500 md:w-[23vw] w-full p-6 my-4 rounded-xl shadow-2xl"
            >
              <p className="text-xl text-gray-200 font-bold">{plan.title}</p>
              <p className="text-3xl text-gray-100 my-2 font-semibold">
                ₹{plan.price}
              </p>
              <ul className="space-y-2 mt-4">
                {plan.list.map((item, i) => (
                  <li key={i} className="flex items-center">
                    {item[0] && (
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-500 mr-2"
                      />
                    )}
                    {!item[0] && <span className="inline-block w-4 mr-2" />}{" "}
                    {/* For spacing */}
                    {item[0] && <p className="text-white">{item[1]}</p>}
                    {!item[0] && (
                      <p className="text-gray-400">{item[1]}</p>
                    )}{" "}
                  </li>
                ))}
              </ul>
              <button className="px-6 hover:scale-105 transition-all text-white font-medium cursor-pointer bg-[#e93a7d] py-2 mt-6 rounded-full">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
