import { useFacilityData, useGetBenefit } from "../api/game_functions";
import { useUserData } from "../api/context/get_edit";
import "../css_designs/FacilitiesView.css";
import { Box, Button, Tooltip, Typography, Zoom } from "@mui/material";
import HoverPopper from "./HoverPopper";

function FacilitiesView() {
  const { facility } = useFacilityData();
  const facilityLevels = useUserData().userData?.facility;
  const getBenefit = useGetBenefit();
  const itemSize = 100;

  let facilityItems = null;
  if (facility) {
    facilityItems = facility.map((fac, idx) => {
      if (!facilityLevels) return null;
      if (facilityLevels![idx] === 0) return <div key={idx}></div>;

      const ratio_left = idx / (facility.length - 1);
      const ratio_top = (idx % 3) / 2;
      const zIndex = idx % 3;
      return (
        <Box
          key={idx}
          className="facility-box"
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
        </Box>
      );
    });
  }

  let stockBarWidth = 0;
  let [stockSum, maxStockSum] = [0, 0];
  if (facility && facilityLevels) {
    [stockSum, maxStockSum] = facility.reduce(
      ([stockSumAcc, maxStockSumAcc], fac, idx) => {
        return [
          stockSumAcc + Math.floor(fac.stock),
          maxStockSumAcc + fac.efficiency * facilityLevels[idx] * 3600,
        ];
      },
      [0, 0]
    );
    stockBarWidth = (stockSum / maxStockSum) * 100;
  }

  return (
    <div className="facilities-view-area">
      {facilityItems}
      <HoverPopper
        title={
          <>
            <Typography>{`現在の収益: ¥${stockSum.toLocaleString()} / ¥${maxStockSum.toLocaleString()}`}</Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              バーをクリックして回収
            </Typography>
          </>
        }
      >
        <Box className="stock-bar-box">
          <Box className="stock-bar-back" />
          <Box className="stock-bar" sx={{ width: `${stockBarWidth}%` }} />
          <Button className="stock-bar-label" onClick={getBenefit}>
            収益
          </Button>
        </Box>
      </HoverPopper>
    </div>
  );
}

export default FacilitiesView;
