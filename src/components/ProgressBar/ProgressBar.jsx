import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ timer, initialTimer }) => {
  const progressWidth = (timer / initialTimer) * 100;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
