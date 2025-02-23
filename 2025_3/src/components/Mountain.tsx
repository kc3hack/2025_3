import React from "react";
import "../css_designs/Mountain.css";
import { useElevation } from "../api/context/get_edit";
function Mountain({ onButtonClick }) {
  const elevation = useElevation();
  return (
    <div className="mountain-container" style={{ height: `${10+(elevation)*0.088}%`, width: `${50+(elevation)*0.02}%` }}>
      <button className="button" onClick={onButtonClick}>Mountain</button>
    </div>
  );
}
export default Mountain;
