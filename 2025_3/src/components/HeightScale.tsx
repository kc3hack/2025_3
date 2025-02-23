import "../css_designs/HeightScale.css";
import { useElevation, useLmHeights } from "../api/context/get_edit";

function HeightScale() {
  const linePositions = useLmHeights() || [];
  const elevation = useElevation();

  return (
    <>
      {linePositions.map((pos, index) => {
        const isInRange =
          10 + elevation * 0.088 >= 10 + pos * 0.088 - 0.5 &&
          10 + elevation * 0.088 <= 10 + pos * 0.088 + 0.3;
        const lineColor = isInRange ? "yellow" : "transparent";
        const textColor = isInRange ? "black" : "transparent"; // 文字の色は黒か透明

        return (
          <div key={index} className="heightScale" style={{ bottom: `${10 + (pos + 77) * 0.088}%`, backgroundColor: lineColor }}>
            <span className="heightScaleText" style={{ color: textColor }}>{pos}m</span>
          </div>
        );
      })}
      
      <div className="heightScaleContainer">
        <div className="heightScale" style={{ bottom: `${10 + elevation * 0.088}%`, backgroundColor: "red" }}>
          <span className="heightScaleText" style={{ color: "black" }}>{elevation}</span> {/* 赤線の文字は常に黒 */}
        </div>
      </div>
    </>
  );
}

export default HeightScale;

