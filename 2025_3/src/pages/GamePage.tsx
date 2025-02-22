import Landscape from "../components/Landscape";
import Tools from "../components/Tools";
import Facilities from "../components/Facilities";
import Menu from "../components/Menu";
import { useMoney } from "../api/context/get_edit";
import {
  useStockBenefit,
  useUserData,
  useFacilityData,
} from "../api/context/game_functions";
import { useEffect } from "react";
import "../css_designs/GamePage.css";

function GamePage() {
  const { userData } = useUserData();
  const { facility } = useFacilityData();
  const stockBenefit = useStockBenefit();
  const Money = useMoney() ?? 0;

  // requestAnimationFrame を使ったメインループ


  return (
    <div className="game-page">
      <div className="Tools">
        <Tools />
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
