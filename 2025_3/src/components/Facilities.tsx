import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import "../css_designs/Facilities.css";

type Facility = {
  name: string;
  img_path: string;
  efficiency: number;
  cost: number;
  magnification: number;
  isLocked: boolean;
};

type Props = {
  facilities: Facility[];
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  facilitylevels: number[];
  setLevels: React.Dispatch<React.SetStateAction<number[]>>;
};

function Facilities({
  facilities,
  money,
  setMoney,
  facilitylevels: levels,
  setLevels,
}: Props) {
  function onFacilityClick(idx: number) {
    setMoney(
      money -
        facilities[idx].cost * facilities[idx].magnification ** levels[idx]
    );
    const newLevels = levels.slice();
    newLevels[idx]++;
    setLevels(newLevels);
  }

  const facilityItems = facilities.map((facility, idx) => {
    const cost = facility.cost * facility.magnification ** levels[idx];
    return (
      <ListItem className="facility-item" key={idx}>
        <ListItemButton
          className="facility-button"
          onClick={() => onFacilityClick(idx)}
          disabled={facility.isLocked || money < cost}
        >
          <div className="facility-info">
            <ListItemAvatar
              sx={{
                filter: facility.isLocked ? "brightness(0%) blur(3px)" : "none",
              }}
            >
              <img
                className="facility-avatar"
                src={facility.img_path}
                alt="facility image"
              />
            </ListItemAvatar>
            {facility.isLocked ? (
              "？？？"
            ) : (
              <>
                {facility.name}
                <br />
                {"¥" + cost.toLocaleString()}
              </>
            )}
          </div>
          {!facility.isLocked && (
            <div className="facility-level">Lv.{levels[idx]}</div>
          )}
        </ListItemButton>
      </ListItem>
    );
  });

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

export default Facilities;
