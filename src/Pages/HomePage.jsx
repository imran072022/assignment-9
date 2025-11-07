import React from "react";
import Banner from "../Components/Banner";
import PopularGames from "../Components/PopularGames";
import GameCard from "../Components/GameCard";
import Newsletter from "../Components/Newsletter";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <GameCard></GameCard>
      <Newsletter></Newsletter>
    </div>
  );
};

export default HomePage;
