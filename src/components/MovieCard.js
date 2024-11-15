import React from "react";
import { IMG_URL } from "../utils/constants";
import "../styles/movieCard.css";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="movie-card">
      <img src={IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
