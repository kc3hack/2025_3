import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import "../css_designs/FacilitiesWindow.css";
import { useMoney, useUserData } from "../api/context/get_edit";
import { useBuyFacility, useFacilityData } from "../api/game_functions";
import HoverPopper from "./HoverPopper";

function FacilitiesWindow() {
  const money = useMoney();
  const facilityLevels = useUserData().userData?.facility;
  const mountainHeight = useUserData().userData?.elevation;
  const { facility } = useFacilityData();
  const buyFacility = useBuyFacility();

  let facilityItems = null;
  if (facility) {
    facilityItems = facility.map((fac, idx) => {
      if (!facilityLevels) return null;
      const isLocked = facilityLevels![idx] === 0;
      const isNext = isLocked && idx > 0 && facilityLevels![idx - 1] > 0;
      const cost = Math.round(
        fac.cost * fac.magnification*Math.log(2+(facilityLevels![idx] - 1)) ** (facilityLevels![idx] - 1)
      );

      const listItems = (
        <ListItem className="facility-item" key={idx}>
          <ListItemButton
            className="facility-button"
            onClick={() => buyFacility(idx)}
            disabled={isLocked || money! < cost}
          >
            <div className="facility-info">
              <ListItemAvatar
                className="facility-avatar"
                sx={{
                  filter:
                    isLocked && !isNext ? "brightness(0%) blur(3px)" : "none",
                }}
              >
                <img
                  className="facility-image"
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

      return isLocked ? (
        listItems
      ) : (
        <HoverPopper
          key={idx}
          placement="right"
          title={
            <>
              <Typography
                sx={{
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                {fac.name}
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                {fac.description}
              </Typography>
              <br />
              <Typography>{`現在の収益効率: ¥${(
                fac.efficiency *
                facilityLevels[idx] *
                ((mountainHeight! / 1000) * 9 + 1)
              ).toLocaleString()} / 秒`}</Typography>
              <Typography>{`次のレベルにするための費用: ¥${cost.toLocaleString()}`}</Typography>
            </>
          }
        >
          {listItems}
        </HoverPopper>
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
