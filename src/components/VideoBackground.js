import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../customHooks/useTrailerVideo";
import "../styles/videoBackground.css";

const VideoBackground = ({ id }) => {
  const keyData = useSelector((store) => {
    return store?.movies?.trailer;
  });

  const backDropImg = useSelector((store) => {
    return store?.movies?.nowPlayingMovies;
  });

  useTrailerVideo(id);
  return (
    <>
      <div className="video-background">
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            keyData?.key +
            "?autoplay=1&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0&cc_load_policy=0&hl=en"
          }
          title="Venom: The Last Dance | Official IMAX® 1.90 Trailer | Filmed For IMAX®"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          allowFullScreen
        ></iframe>
        <img
          src={
            "https://image.tmdb.org/t/p/original/" +
            (backDropImg[0]
              ? backDropImg[0]?.backdrop_path
              : backDropImg[1]?.backdrop_path)
          }
        />
      </div>
    </>
  );
};

export default VideoBackground;
