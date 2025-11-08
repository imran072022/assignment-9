import React, { useEffect, useState } from "react";
import coc from "../assets/coc.jpg";
import ff from "../assets/ff.jpg";
import modernWarship from "../assets/modernWarship.jpg";
import lm from "../assets/lm.jpg";
import pubg from "../assets/pubg.webp";
import mlbb from "../assets/mlbb.jpg";
import HeroIntro from "./Animation/HeroIntro";

const slides = [coc, ff, modernWarship, lm, pubg, mlbb];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden ">
        <HeroIntro></HeroIntro>
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className={`w-full transition-opacity duration-700 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
