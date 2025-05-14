import React, { useState } from "react";

const NewProgressBar = () => {
  const [progressPercentage, setProgressPercentage] = useState(0);
//   const [progress, setProgress] = useState(0);
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    updateProgressPercentage();
  };

  const updateProgressPercentage = () => {
    const filledInputs = Object.values(inputValues).filter(
      (value) => value.trim() !== ""
    );
    const percentage = (filledInputs.length / 3) * 100;
    setProgressPercentage(percentage);
  };

  const increaseProgress = (progressPercentage) => {
    setProgressPercentage(progressPercentage);
  };

  return (
    <div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      {/* <input name="input1" type="text" value={inputValues.input1} onChange={(e) => handleChange(e)} />
      <input name="input2" type="text" value={inputValues.input2} onChange={(e) => handleChange(e)} />
      <input name="input3" type="text" value={inputValues.input3} onChange={(e) => handleChange(e)} /> */}
      <div className="buttons">
        <button onClick={() => increaseProgress(30)}>One</button>
        <button onClick={() => increaseProgress(70)}>Two</button>
        <button onClick={() => increaseProgress(100)}>Three</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        Progress: {progressPercentage}%
        <div
          style={{
            width: "100%",
            backgroundColor: "#ddd",
            height: "20px",
            marginTop: "5px",
          }}
        >
          <div
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: "green",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NewProgressBar;
