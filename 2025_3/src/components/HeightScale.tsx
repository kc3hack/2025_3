import "../css_designs/HeightScale.css";
import { useElevation, useLmHeights } from "../api/context/get_edit";
function HeightScale() {
  const linePositions = useLmHeights() || [];
  const elevation = useElevation();
  return (
    <>
      {linePositions.map((pos, index) => (
          <div
            key={index}
            className="heightScale"
            style={{
              bottom: `${10+(pos+77)*0.088}%`,
              backgroundColor:
              (10+(elevation)*0.088) >= (10+(pos)*0.088) - 0.5 && (10+(elevation)*0.088)  <= (10+(pos)*0.088) + 0.3 ? 'yellow' : 'transparent'
            }}
          />
        ))}
        <div className=".heightScaleContainer">
          <div className="heightScale" style={{bottom: `${10+(elevation)*0.088}%`,backgroundColor:`red`}}></div>
        </div>
    </>
  );
}
export default HeightScale;
