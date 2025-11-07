import React, { useContext } from "react";
import { GamesContext } from "../Contexts/GamesProvider";
import Loading from "./Loading";

const PopularGames = () => {
  const { games, loading } = useContext(GamesContext);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-2xl text-center my-7 font-bold">
        Popular Games Section
      </h2>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          {games.map((game) => (
            <h2>{game.title}</h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularGames;
