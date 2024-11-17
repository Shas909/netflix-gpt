import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const MovieSuggestionResults = () => {
  const { gptMoviesList, gptMoviesName } = useSelector((store) => {
    return store.gpt;
  });

  return (
    <div className="movie-list-main">
      {gptMoviesList &&
        gptMoviesList.map((movie, index) => {
          return (
            <MoviesList
              key={index}
              title={gptMoviesName[index]}
              movies={movie}
            />
          );
        })}
    </div>
  );
};

export default MovieSuggestionResults;
