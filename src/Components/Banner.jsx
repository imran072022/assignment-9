import React, { useEffect, useState } from "react";
import coc from "../assets/coc.jpg";
import ff from "../assets/ff.jpg";
import modernWarship from "../assets/modernWarship.jpg";
import lm from "../assets/lm.jpg";
import pubg from "../assets/pubg.webp";
import mlbb from "../assets/mlbb.jpg";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto my-12 ">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 rounded-[40px] animate-gradient-bg bg-gradient-to-r from-cyan-600 via-blue-800 to-emerald-700 opacity-80"></div>

      <div className="relative flex items-center justify-center py-6">
        {/* Slider Frame */}
        <div className="relative w-full lg:w-[90%] overflow-hidden rounded-3xl border-[6px] border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.5)]">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className={`w-full transition-opacity duration-700 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Inner glow layer */}
          <div className="absolute inset-0 -z-10 rounded-[40px] animate-gradient-bg animate-pulse-glow ..."></div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-0 z-10 bg-cyan-400/20 hover:bg-cyan-400/40 text-white w-10 h-11 md:w-12 md:h-18 rounded-full flex items-center justify-center text-3xl border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] hover:scale-110 transition-all duration-300"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-0 z-10 bg-cyan-400/20 hover:bg-cyan-400/40 text-white w-10 h-11 md:w-12 md:h-18 rounded-full flex items-center justify-center text-3xl border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] hover:scale-110 transition-all duration-300"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
