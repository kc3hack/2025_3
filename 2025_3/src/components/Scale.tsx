import React from "react";
import "./Scale.css";
function Scale( {value} ) {
  return (
      <div className="scale-item">
        {value}m
      </div>
  );
}

export default Scale;