import React from "react";
import MovieCard from "./MovieCard";
import "../styles/moviesList.css";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="movie-cards-container">
      <h1>{title && movies && movies.length > 0 && title}</h1>
      <div className="movie-cards-list">
        {movies &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item?.id} posterPath={item?.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
