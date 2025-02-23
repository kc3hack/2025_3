import "../css_designs/HeightScale.css";
import { useElevation, useLmHeights } from "../api/context/get_edit";

function HeightScale() {
  const linePositions = useLmHeights() || [];
  const elevation = useElevation();

  return (
    <>
      {linePositions.map((pos, index) => {
        const isInRange = pos - 5 <= elevation && elevation <= pos;
        const lineColor = isInRange ? "yellow" : "transparent"; // 線の色は黄色か透明
        // const lineColor = "yellow"; // 線の色は黄色か透明
        const textColor = isInRange ? "black" : "transparent"; // 文字の色は黒か透明
        // const textColor = "black"; // 文字の色は黒か透明

        return (
          <div key={index} className="heightScale" style={{ bottom: `calc(100px + 10% + 90% * ${pos} / 1000)`, backgroundColor: lineColor }}>
            <span className="heightScaleText" style={{ color: textColor }}>{pos}m</span>
          </div>
        );
      })}
    </>
  );
}

export default HeightScale;

