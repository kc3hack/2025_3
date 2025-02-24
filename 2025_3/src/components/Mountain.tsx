import React from "react";
import "../css_designs/Mountain.css";
import { useElevation } from "../api/context/get_edit";
function Mountain({ onButtonClick }) {
  const elevation = useElevation();
  return (
    <div className="mountain-container" style={{ height: `calc(10% + (90% - 100px) * ${(elevation)} / 1000)`, width: `${500+(elevation)}px` }}>
      <button className="button" onClick={onButtonClick} />
    </div>
  );
}
export default Mountain;
