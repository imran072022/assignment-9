import React, { useContext } from "react";
import { GamesContext } from "../Contexts/GamesProvider";
import Loading from "../Components/Loading";
import GameCard from "../Components/GameCard";
import { motion } from "framer-motion";
const Games = () => {
  const { games, loading } = useContext(GamesContext);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <title>XPulse - Discover & Play</title>
      <motion.h2
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className=" text-5xl text-center  font-extrabold orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 "
      >
        Explore Games
      </motion.h2>
      <p className="text-white text-xl text-center mb-10 mt-2">
        Discover and play your favorite games from all genres.
      </p>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;
