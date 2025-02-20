import { useFacilityData } from "../api/context/game_functions";
import { useUserData } from "../api/context/get_edit";
import "../css_designs/FacilitiesView.css";
import { Button } from "@mui/material";

function FacilitiesView() {
  const { facility } = useFacilityData();
  const facilityLevels = useUserData().userData?.facility;
  const itemSize = 100;

  const facilityItems = facility.map((fac, idx) => {
    if (!facilityLevels) return null;
    if (facilityLevels![idx] === 0) return <div key={idx}></div>;

    const ratio_left = idx / (facility.length - 1);
    const ratio_top =  (idx % 3) / 2;
    const zIndex = idx % 3;
    return (
      <Button
        key={idx}
        className="facility-button"
        sx={{
          left: `calc((100% - ${itemSize}px) * ${ratio_left})`,
          top: `calc((100% - ${itemSize}px) * ${ratio_top})`,
          width: itemSize,
          height: itemSize,
          zIndex: zIndex,
        }}
      >
        <img
          className="facility-image"
          src={fac.img_path}
          alt={`${fac.name}の画像`}
        />
      </Button>
    );
  });

  return <div className="facilities-view-area">{facilityItems}</div>;
}

export default FacilitiesView;
