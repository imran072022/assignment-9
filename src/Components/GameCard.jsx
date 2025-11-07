import React from "react";
import star from "../assets/star.png";
import { Link } from "react-router";

const GameCard = ({ game }) => {
  if (!game) return null;
  const { title, coverPhoto, ratings, category, id } = game;
  const totalStars = Math.round(ratings);
  return (
    <Link
      to={`/game-details/${id}`}
      className="relative rounded-lg overflow-hidden group shadow-lg cursor-pointer"
    >
      {/* Image */}
      <img src={coverPhoto} alt="" className="w-full" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Text overlay */}
      <div className="absolute bottom-3 left-3 text-white">
        <h2 className="text-xl font-semibold">{title}</h2>

        <p className=" bg-black/50 inline-block px-2 py-0.5 rounded-full mt-1">
          {category}
        </p>

        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              className="w-4 h-4 opacity-90"
              src={star}
              alt="star"
              style={{
                filter:
                  index < totalStars
                    ? "none"
                    : "grayscale(90%) brightness(80%)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Optional hover effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
    </Link>
  );
};

export default GameCard;
