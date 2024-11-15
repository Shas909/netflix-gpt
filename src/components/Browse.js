import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import "../styles/master.css";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRated";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <div className="master-container">
        <Header />

        <MainContainer />

        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
