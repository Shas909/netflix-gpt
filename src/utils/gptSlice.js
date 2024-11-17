import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesList: null,
    gptMoviesName: null,
  },
  reducers: {
    toggleGpt: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { movieList, names } = action.payload;
      state.gptMoviesList = movieList;
      state.gptMoviesName = names;
    },
  },
});

export const { toggleGpt, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
