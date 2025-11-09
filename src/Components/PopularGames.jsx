import React, { useContext } from "react";
import { GamesContext } from "../Contexts/GamesProvider";
import Loading from "./Loading";
import GameCard from "./GameCard";
import { Link } from "react-router";

const PopularGames = () => {
  const { games, loading } = useContext(GamesContext);
  if (!games) return null;
  const sortedGames = [...games].sort((a, b) => b.ratings - a.ratings);
  const topRatedGames = sortedGames.slice(0, 7);

  return (
    <div className="max-w-7xl mx-auto my-14 sm:my-24">
      <h2 className="text-white text-3xl sm:text-5xl text-center  font-bold orbitron">
        Popular Games
      </h2>
      <p className="text-white text-lg sm:text-xl text-center mb-10 mt-1 sm:mt-2">
        The hottest games making waves — dive into what players can’t stop
        playing!
      </p>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-3">
          {topRatedGames.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
      )}

      <div className="my-8 text-center">
        {" "}
        <Link
          to="/games"
          className="inline-block bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] px-6 py-3 text-white rounded-md font-medium hover:scale-105 transition-transform"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default PopularGames;
