import "../css_designs/TipPanel.css";
import {
  useLmNames,
  useLmDescriptions,
  useLmImgPaths,
  useLmHeights,
} from "../api/context/get_edit";
import { useFacilityData } from "../api/game_functions";

function TipPanel({ imageIndex, isFading }) {
  const images = useLmImgPaths();
  const tipsTitles = useLmNames();
  const tipsText = useLmDescriptions();
  const tipsHeights = useLmHeights();
  const { facility } = useFacilityData();
  if (
    images === null ||
    tipsTitles === null ||
    tipsText === null ||
    tipsHeights === null ||
    facility === null
  ) {
    return null;
  }
  return (
    <div className={`tip-container ${isFading ? "fade-out" : "fade-in"}`}>
      <p className="tip-title">
        {`${tipsTitles[imageIndex]}
        (${
          tipsHeights[imageIndex] && tipsHeights[imageIndex].toLocaleString()
        }m)`}
      </p>
      <hr className="tip-divider" />
      <div className="tip-content">
        <img
          className="tip-image"
          src={images[imageIndex]}
          alt={`${tipsTitles[imageIndex]}の画像`}
        />
        <p className="tip-text">{tipsText[imageIndex]}</p>
      </div>
      <hr className="tip-divider" />
      <p className="tip-unlock">
        <b>{facility[imageIndex] && facility[imageIndex + 1].name}</b>
        &nbsp;がアンロックされました
      </p>
    </div>
  );
}

export default TipPanel;
