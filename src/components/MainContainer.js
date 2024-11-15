import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import "../styles/mainContainer.css";

const MainContainer = () => {
  const trailer = useSelector((store) => {
    return store.movies.nowPlayingMovies;
  });

  return (
    <>
      <div className="main-container">
        <div className="main-container-title">
          <VideoTitle
            title={trailer[0]?.original_title}
            overview={trailer[0]?.overview}
          />
        </div>
        <div style={{ overflow: "hidden" }}>
          <VideoBackground id={trailer[0]?.id} />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
