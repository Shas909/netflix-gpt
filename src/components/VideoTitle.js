import React from "react";
import "../styles/videoTitle.css";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <div className="title-div">
        <span style={{ fontWeight: "bold", fontSize: "2rem" }}>{title}</span>
        <p
          style={{
            fontSize: "1.1rem",
            width: "25%",
            marginTop: "4px",
            marginBottom: "4px",
          }}
        >
          {overview}
        </p>
        <div className="button-div">
          <button style={{ marginRight: "4px" }}>Play</button>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
