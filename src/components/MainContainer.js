import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const trailer = useSelector((store) => {
    return store.movies.nowPlayingMovies;
  });

  return (
    <>
      <div style={{ width: "100%", position: "absolute", zIndex: "1" }}>
        <VideoTitle
          title={trailer[0]?.original_title}
          overview={trailer[0]?.overview}
        />
      </div>
      <div style={{ overflow: "hidden" }}>
        <VideoBackground id={trailer[0]?.id} />
      </div>
    </>
  );
};

export default MainContainer;
