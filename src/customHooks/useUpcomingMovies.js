import React from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcomingMovies;
