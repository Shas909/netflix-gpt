import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const listData = useSelector((store) => {
    return store?.movies;
  });

  return (
    <>
      {listData ? (
        <div className="movie-list-main">
          <MoviesList
            title={"Now Playing"}
            movies={listData?.nowPlayingMovies}
          />
          <MoviesList title={"Trending"} movies={listData?.popularMovies} />
          <MoviesList title={"Popular"} movies={listData?.topRatedMovies} />
          <MoviesList
            title={"Upcoming Movies"}
            movies={listData?.upcomingMovies}
          />
        </div>
      ) : null}
    </>
  );
};

export default SecondaryContainer;
