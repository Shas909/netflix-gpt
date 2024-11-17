import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import "../styles/master.css";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRated";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import MovieSuggestionResults from "./MovieSuggestionResults";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const gptState = useSelector((store) => {
    return store?.gpt?.showGptSearch;
  });

  return (
    <>
      <div className="master-container">
        <Header />
        {gptState ? (
          <div>
            <GptSearch />
          </div>
        ) : (
          <div>
            <MainContainer />
            <SecondaryContainer />
          </div>
        )}
      </div>
    </>
  );
};

export default Browse;
