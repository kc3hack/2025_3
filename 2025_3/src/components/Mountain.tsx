import React from "react";
import "./Mountain.css";
function Mountain({ onButtonClick }) {
  return (
    <div >
      <button className="button" onClick={onButtonClick}>Mountain</button>
    </div>
  );
}
export default Mountain;