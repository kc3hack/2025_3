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
import Background from "../components/Background";

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
    
      <Background />
      <Landscape statusValue={Money} />
      <div className="Tools">
        <Tools />
      </div>
      <div className="facilities-window">
        <FacilitiesWindow />
      </div>
      <div className="facilities-view">
        <FacilitiesView />
      </div>
   
      <Menu />
        <div className="title">天保山を育てよう</div>
    </div>
  );
}

export default GamePage;
