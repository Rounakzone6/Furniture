import React from "react";
import { cards, todayDeals } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TodayDeals = () => {
  return (
    <div className="py-10">
      <div className="md:max-w-[80%] mx-auto p-2 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-[2px] bg-yellow-600" />
            <p className="text-md md:text-xl">Today Deals</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-2xl md:text-3xl">
              <span className="text-[#224A26] font-medium">Deals</span> of the
              Day
            </p>
            <p className="text-xs md:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit.
            </p>
          </div>
          {/* <div>
            <div>
              {todayDeals.map((item,index)=>(
                <div key={index}>
                  <div className="relative">
                    <img src={item.img} alt={item.title} className="absolute" />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="flex gap-4 mt-4">
            {cards.map((item, index) => (
              <div key={index} className="border p-8 md:h-80 bg-no-repeat bg-contain bg-center flex rounded-2xl shadow border-gray-200" style={{backgroundImage:`url(${item.img})`}}>
                <div className="flex flex-col justify-around items-center">
                <p className="text-sm md:text-lg text-red-900">Flat {item.discount}% Discount</p>
                <p className="text-lg md:text-xl font-medium">{item.title}</p>
                <p className="text-sm">{item.about}</p>
                <button className="text-white px-3 py-2 w-30 bg-[#224A26] rounded-full">Shop Now <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayDeals;
