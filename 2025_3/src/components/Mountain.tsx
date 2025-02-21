import React from "react";
import "./Mountain.css";
function Mountain({ onButtonClick }) {
  return (
    <div className="mountain-container">
      <button className="button" onClick={onButtonClick}>Mountain</button>
    </div>
  );
}
export default Mountain;