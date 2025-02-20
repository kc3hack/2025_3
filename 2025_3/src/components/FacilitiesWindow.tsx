import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import "../css_designs/FacilitiesWindow.css";
import { useMoney, useUserData } from "../api/context/get_edit";
import { useBuyFacility, useFacilityData } from "../api/game_functions";

function FacilitiesWindow() {
  const money = useMoney();
  const facilityLevels = useUserData().userData?.facility;
  const { facility } = useFacilityData();
  const buyFacility = useBuyFacility();

  let facilityItems = null;
  if (facility) {
    facilityItems = facility.map((fac, idx) => {
      if (!facilityLevels) return null;
      const isLocked = facilityLevels![idx] === 0;
      const isNext = isLocked && idx > 0 && facilityLevels![idx - 1] > 0;
      const cost = Math.round(
        fac.cost * fac.magnification ** (facilityLevels![idx] - 1)
      );
      return (
        <ListItem className="facility-item" key={idx}>
          <ListItemButton
            className="facility-button"
            onClick={() => buyFacility(idx)}
            disabled={isLocked || money! < cost}
          >
            <div className="facility-info">
              <ListItemAvatar
                sx={{
                  filter:
                    isLocked && !isNext ? "brightness(0%) blur(3px)" : "none",
                }}
              >
                <img
                  className="facility-avatar"
                  src={fac.img_path}
                  alt={`${fac.name}の画像`}
                />
              </ListItemAvatar>
              {!isLocked ? (
                <>
                  {fac.name}
                  <br />
                  {"¥" + cost.toLocaleString()}
                </>
              ) : isNext ? (
                <>{fac.name}</>
              ) : (
                <>？？？</>
              )}
            </div>
            {!isLocked && (
              <div className="facility-level">Lv.{facilityLevels![idx]}</div>
            )}
          </ListItemButton>
        </ListItem>
      );
    });
  }

  return (
    <Box className="facilities-box">
      <h1>施設</h1>
      <Divider className="facilities-divider" />
      <Box className="facilities-list">
        <List>{facilityItems}</List>
      </Box>
    </Box>
  );
}

export default FacilitiesWindow;
