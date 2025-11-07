import React, { createContext, useEffect, useState } from "react";
export const GamesContext = createContext();
const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("games.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      });
  }, []);

  const gameInfo = {
    games,
    loading,
  };

  return <GamesContext value={gameInfo}>{children}</GamesContext>;
};

export default GamesProvider;
