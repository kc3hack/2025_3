import Landscape from "../components/Landscape";
import Tools from "../components/Tools";
import Facilities from "../components/Facilities";
import Menu from "../components/Menu";
import { useMoney, useLmHeights } from "../api/context/get_edit";
import {
  useStockBenefit,
  useUserData,
  useFacilityData,
} from "../api/game_functions";
import { useEffect } from "react";
import FacilitiesWindow from "../components/FacilitiesWindow";
import FacilitiesView from "../components/FacilitiesView";
import { Box } from "@mui/material";
import "../css_designs/GamePage.css";

function GamePage() {
  const { userData } = useUserData();
  const { facility } = useFacilityData();
  const stockBenefit = useStockBenefit();
  const Money = useMoney() ?? 0;

  // requestAnimationFrame を使ったメインループ
  const dataLoaded = userData !== null && facility !== null;
  useEffect(() => {
    let requestId: number;
    let prevTimestamp: number | null = null;
    function step(timestamp: DOMHighResTimeStamp) {
      if (prevTimestamp) {
        const deltaTime = (timestamp - prevTimestamp) / 1000;
        stockBenefit(deltaTime);
      }
      prevTimestamp = timestamp;
      requestId = requestAnimationFrame(step);
    }
    requestId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestId);
  }, [dataLoaded, userData?.facility]);

  return (
    <div className="game-page">

      <Landscape statusValue={Money} />
      <div className="facilities-window">
        <FacilitiesWindow />
      </div>
      <div className="facilities-view">
        <FacilitiesView />
      </div>
      <button style={{position: "absolute"}} onClick={() => { // デバッグ用リセットボタン
        localStorage.removeItem("userData");
        window.location.reload();
      }}>reset</button>
            <Menu />
    </div>
  );
}

export default GamePage;
