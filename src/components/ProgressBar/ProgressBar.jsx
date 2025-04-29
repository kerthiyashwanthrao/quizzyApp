// ProgressBar.jsx
import React from "react";
import "./ProgressBar.css"; // Import CSS file

const ProgressBar = ({ timer ,initialTimer}) => {
    console.log(timer,"timer");
    console.log(initialTimer,"initialTimer");
    
    // const initialTimer = timer
    const progressWidth = (timer / initialTimer) * 100 ;
    console.log(progressWidth,"progressWidth");
    

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
