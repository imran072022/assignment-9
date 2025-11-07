import React from "react";
import Banner from "../Components/Banner";
import PopularGames from "../Components/PopularGames";
import GameCard from "../Components/GameCard";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <GameCard></GameCard>
    </div>
  );
};

export default HomePage;
