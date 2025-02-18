import React, { useState, useEffect } from "react";
import img1 from "../assets/img/heroSlider/1.jpg";
import img2 from "../assets/img/heroSlider/2.jpg";
import img3 from "../assets/img/heroSlider/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, text: "Slide 1", image: img1 },
    { id: 2, text: "Slide 2", image: img2 },
    { id: 3, text: "Slide 3", image: img3 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] mt-0">
      {/* Background image with smooth transition */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black opacity-30"></div>

        {/* Text overlay */}
        <div className="absolute w-full h-full flex justify-center items-center text-white text-5xl font-bold px-6">
          {slides[currentSlide].text}
        </div>
      </div>

      {/* Navigation buttons with transparent background and smooth hover effect */}
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white bg-transparent p-2 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
        onClick={prevSlide}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="lg"
          className="opacity-50 hover:opacity-100 transition-opacity duration-300"
        />
      </button>
      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white bg-transparent p-2 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
        onClick={nextSlide}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="lg"
          className="opacity-50 hover:opacity-100 transition-opacity duration-300"
        />
      </button>
    </div>
  );
};

export default HeroSlider;
