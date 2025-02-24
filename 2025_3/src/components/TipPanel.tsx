import "../css_designs/TipPanel.css";
import {
  useLmNames,
  useLmDescriptions,
  useLmImgPaths,
  useLmHeights,
  useLmMarkpoints,
} from "../api/context/get_edit";
import { useFacilityData } from "../api/game_functions";

function TipPanel({ imageIndex, isFading }) {
  const images = useLmImgPaths();
  const tipsTitles = useLmNames();
  const tipsText = useLmDescriptions();
  const tipsHeights = useLmHeights();
  const markpoints = useLmMarkpoints();
  const { facility } = useFacilityData();
  if (
    images === null ||
    tipsTitles === null ||
    tipsText === null ||
    tipsHeights === null ||
    facility === null ||
    markpoints === null
  ) {
    return null;
  }
  return (
    <div className={`tip-container ${isFading ? "fade-out" : "fade-in"}`}>
      <p className="tip-title">{tipsTitles[imageIndex]}</p>
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
      {markpoints[imageIndex] !== -1 ? (
        <p className="tip-unlock">
          <b>
            {facility[markpoints[imageIndex]] &&
              facility[markpoints[imageIndex]].name}
          </b>
          &nbsp;がアンロックされました
        </p>
      ) : (
        <p className="tip-unlock" style={{ color: "gray" }}>
          アンロックされた施設はありません
        </p>
      )}
    </div>
  );
}

export default TipPanel;
