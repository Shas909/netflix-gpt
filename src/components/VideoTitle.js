import React from "react";
import "../styles/videoTitle.css";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const keyData = useSelector((store) => {
    return store?.movies?.trailer;
  });
  const playClick = () => {
    window.open(
      "https://www.youtube.com/embed/" +
        keyData?.key +
        "?autoplay=1&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0&cc_load_policy=0&hl=en"
    );
  };

  return (
    <div>
      <div className="title-div">
        <div className="inner-title-div">
          <span>{title}</span>
          <p>{overview}</p>
          <div className="button-div">
            <button
              onClick={() => {
                playClick();
              }}
            >
              Play
            </button>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
