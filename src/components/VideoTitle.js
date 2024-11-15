import React from "react";
import "../styles/videoTitle.css";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <div className="title-div">
        <div className="inner-title-div">
          <span>{title}</span>
          <p>{overview}</p>
          <div className="button-div">
            <button>Play</button>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
