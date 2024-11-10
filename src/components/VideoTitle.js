import React from "react";
import "../styles/videoTitle.css";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <div className="title-div">
        <div style={{ marginTop: "8%", marginLeft: "24px" }}>
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
            <button>Play</button>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
