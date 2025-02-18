import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import "../css_designs/facilities.css";

export type Facility = {
  name: string;
  img_path: string;
  efficiency: number;
  cost: number;
  magnification: number;
  isLocked: boolean;
  level: number;
  stock: number;
};


type Props = {
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  facilities: Facility[];
  setFacilities: React.Dispatch<React.SetStateAction<Facility[]>>;
};

function Facilities({ money, setMoney, facilities, setFacilities }: Props) {
  function onFacilityClick(idx: number) {
    // 所持金を減らす
    setMoney(money - facilities[idx].cost);

    // 施設のレベル、コストを上げる
    const newFacilities = facilities.slice();
    newFacilities[idx].level++;
    newFacilities[idx].cost = Math.round(
      facilities[idx].cost * facilities[idx].magnification
    );
    setFacilities(newFacilities);
  }

  const facilityItems = facilities.map((facility, idx) => {
    return (
      <ListItem className="facility-item" key={idx}>
        <ListItemButton
          className="facility-button"
          onClick={() => onFacilityClick(idx)}
          disabled={facility.isLocked || money < facilities[idx].cost}
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
                alt={`${facility.name}の画像`}
              />
            </ListItemAvatar>
            {facility.isLocked ? (
              "？？？"
            ) : (
              <>
                {facility.name}
                <br />
                {"¥" + facilities[idx].cost.toLocaleString()}
              </>
            )}
          </div>
          {!facility.isLocked && (
            <div className="facility-level">Lv.{facilities[idx].level}</div>
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
