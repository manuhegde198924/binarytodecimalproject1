import React, { useState } from "react";
import "./inputbox.css";

const Inputoutput = () => {
  const [binaryInput, setBinaryInput] = useState("");
  const [decimalOutput, setDecimalOutput] = useState("");

  const handleBinaryInputChange = (e) => {
    const inputValue = e.target.value;
    // Validate input to allow only 0 and 1
    if (/^[01]*$/.test(inputValue) || inputValue === "") {
      setBinaryInput(inputValue);
      convertBinaryToDecimal(inputValue);
    }
  };

  const convertBinaryToDecimal = (binary) => {
    const decimal = parseInt(binary, 2);
    if (!isNaN(decimal)) {
      setDecimalOutput(decimal);
    } else {
      setDecimalOutput("Invalid Binary");
    }
  };

  return (
    <div className="main">
      <div className="converter">
        <h4>ENTER THE BINARY VALUE U WANT TO CONVERT:</h4>
        <input
          className="inputs"
          type="text"
          placeholder="Enter binary number"
          value={binaryInput}
          onChange={handleBinaryInputChange}
        />
      </div>
      <div className="result">
        <h1>THE DECIMAL VALUE RESULT IS</h1>
        <label>IN Decimal:</label>
        <h2>{decimalOutput}</h2>
      </div>
    </div>
  );
};

export default Inputoutput;
