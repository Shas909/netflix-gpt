import React, { useRef } from "react";
import "../styles/gptSearch.css";
import client from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import MovieSuggestionResults from "./MovieSuggestionResults";

const GptSearch = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const tmbdSearch = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await res.json();
    return json.results;
  };
  const searchOpenAi = async () => {
    const gptQuery =
      "Give me only 5 best movie recommendations based on the query :" +
      searchText.current.value +
      ". The result should be comma separated for each movie and dont put bullet numberings as i only need the names. Also dont keep spaces after commas";

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const movieArray = gptResults?.choices[0]?.message?.content.split(",");

    const movieResults = movieArray.map((movie) => tmbdSearch(movie));
    const mainResult = await Promise.all(movieResults);

    dispatch(addGptMovies({ movieList: mainResult, names: movieArray }));
  };
  return (
    <div className="gpt">
      <div className="gpt-main">
        <input ref={searchText} className="gpt-input"></input>
        <button
          className="gpt-search-button"
          onClick={() => {
            searchOpenAi();
          }}
        >
          Search
        </button>
      </div>
      <div className="suggestions-container">
        <MovieSuggestionResults />
      </div>
    </div>
  );
};

export default GptSearch;
