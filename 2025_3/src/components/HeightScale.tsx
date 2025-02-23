import "../css_designs/HeightScale.css";
import { useElevation } from "../api/context/get_edit";
function HeightScale() {
  const linePositions = [100, 200, 300, 400, 500, 600, 700, 800, 900];
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
              (10+(elevation)*0.088) >= (10+(pos)*0.088) - 5 && (10+(elevation)*0.088)  <= (10+(pos)*0.088) + 5 ? 'red' : 'black'
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
