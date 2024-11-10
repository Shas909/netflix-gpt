import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../customHooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  const keyData = useSelector((store) => {
    return store?.movies?.trailer;
  });
  useTrailerVideo(id);
  return (
    <>
      <div>
        <iframe
          style={{
            width: "100vw",
            // height: "100vh",
            aspectRatio: "16/9",
            border: "none",
          }}
          src={
            "https://www.youtube.com/embed/" +
            keyData?.key +
            "?autoplay=1&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0&cc_load_policy=0&hl=en"
          }
          title="Venom: The Last Dance | Official IMAX® 1.90 Trailer | Filmed For IMAX®"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
