import React from "react";
import { showcase } from "../assets";

const Showcase = () => {
  return (
    <div className="py-6 bg-[#2f1893]">
      <div className="mx-auto max-w-[80%]">
        <div className="text-white py-2 flex justify-between items-center">
          <h1 className="font-bold text-xl">Last Works</h1>
          <button className="border cursor-pointer hover:bg-pink-600 hover:border-none px-4 py-2 rounded-full">
            View all Works
          </button>
        </div>
        <div className="flex text-white items-center text-center justify-center flex-wrap gap-6 py-2">
          {showcase.map((item, index) => (
            <div className="cursor-pointer" key={item.id}>
              <img
                src={item.img}
                width={420}
                height={40}
                alt={item.title}
                className="rounded-lg"
              />
              <p className="pt-2">{item.title}</p>
              <p className="text-sm">{item.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
