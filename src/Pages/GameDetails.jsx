import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { GamesContext } from "../Contexts/GamesProvider";
import starFull from "../assets/star.png";
import starHalf from "../assets//starHalf.png";
import starEmpty from "../assets/emptyStar.png";
import NoDataFound from "./NoDataFound";

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { games } = useContext(GamesContext);

  if (!games || games.length === 0) return <p>No games available.</p>;

  const clickedGame = games.find((game) => game.id === id);
  if (!clickedGame) return <NoDataFound></NoDataFound>;

  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = clickedGame;

  const ratingValue = parseFloat(ratings) || 0;
  const fullStars = Math.floor(ratingValue);
  const hasHalfStar = ratingValue % 1 >= 0.5;

  const relatedGames = games
    .filter((g) => g.category === category && g.id !== id)
    .slice(0, 4);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <title>{title}</title>
      {/* Blurred background hero */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      ></div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-3 py-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-sm text-gray-200 transition"
        >
          ← Back to Home
        </button>

        {/* Game Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-br from-[#0A0F1E] to-[#101827] p-6 rounded-2xl shadow-xl border border-white/10">
          {/* Cover Image */}
          <div className="w-full md:w-1/3 overflow-hidden rounded-xl shadow-lg">
            <img
              src={coverPhoto}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Game Info */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold md:font-bold">{title}</h2>
            <p className="text-sm text-gray-400">Developed by {developer}</p>

            {/* Category + Rating */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium">
                {category}
              </span>

              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => {
                  if (i < fullStars)
                    return (
                      <img key={i} src={starFull} alt="★" className="w-4 h-4" />
                    );
                  if (i === fullStars && hasHalfStar)
                    return (
                      <img key={i} src={starHalf} alt="☆" className="w-5 h-5" />
                    );
                  return (
                    <img
                      key={i}
                      src={starEmpty}
                      alt="☆"
                      className="w-4.5 h-4.5 opacity-50"
                    />
                  );
                })}
                <span className="ml-1 text-gray-300 text-sm">
                  {ratingValue.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{description}</p>

            {/* Download Button */}
            <a
              href={downloadLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Download Now
            </a>
          </div>
        </div>

        {/* Related Games */}
        {relatedGames.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-medium sm:font-semibold mb-4">
              More like this
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {relatedGames.map((game) => (
                <div
                  key={game.id}
                  onClick={() => navigate(`/game-details/${game.id}`)}
                  className="cursor-pointer bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:scale-105 transition-transform"
                >
                  <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-sm font-medium sm:font-semibold line-clamp-2">
                      {game.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {game.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetails;
