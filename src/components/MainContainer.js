import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const trailer = useSelector((store) => {
    return store.movies.nowPlayingMovies;
  });
  console.log(trailer[0]);

  return (
    <>
      <VideoTitle
        title={trailer[0]?.original_title}
        overview={trailer[0]?.overview}
      />
      <VideoBackground />
    </>
  );
};

export default MainContainer;
