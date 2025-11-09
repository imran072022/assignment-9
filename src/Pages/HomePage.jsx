import React, { useContext } from "react";
import Banner from "../Components/Banner";
import PopularGames from "../Components/PopularGames";
import GameCard from "../Components/GameCard";
import Newsletter from "../Components/Newsletter";
import HeroIntro from "../Components/Animation/HeroIntro";
import { GamesContext } from "../Contexts/GamesProvider";
import Loading from "../Components/Loading";

const HomePage = () => {
  const { loading } = useContext(GamesContext);
  if (loading) return <Loading></Loading>;
  return (
    <div>
      <HeroIntro></HeroIntro>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <GameCard></GameCard>
      <Newsletter></Newsletter>
    </div>
  );
};

export default HomePage;
