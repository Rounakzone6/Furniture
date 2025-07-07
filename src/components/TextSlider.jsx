import React from "react";
import Slider from "react-slick";
import { slides } from "../assets";

const TextSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[100%]">
      <Slider {...settings} className="w-[70vw] md:max-w-4xl mx-auto ml-10">
      {slides.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center flex-col text-center"
        >
          <p className="md:text-2xl text-purple-300 mb-2">{item.heading}</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-4">{item.title}</h2>
          <p className="text-gray-200 md:text-xl">{item.subtitle}</p>
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default TextSlider;
