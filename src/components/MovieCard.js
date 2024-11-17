import React from "react";
import { IMG_URL } from "../utils/constants";
import "../styles/movieCard.css";

const MovieCard = ({ posterPath }) => {
  return (
    <>
      {posterPath ? (
        <div className="movie-card">
          <img src={IMG_URL + posterPath} />
        </div>
      ) : null}
    </>
  );
};

export default MovieCard;
