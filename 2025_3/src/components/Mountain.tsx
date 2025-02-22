import React from "react";
import "../css_designs/Mountain.css";
function Mountain({ onButtonClick }) {
  return (
    <div className="mountain-container">
      <button className="button" onClick={onButtonClick}>Mountain</button>
    </div>
  );
}
export default Mountain;
