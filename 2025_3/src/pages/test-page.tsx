import "../css_designs/test-page.css";
import { testfnc1 } from "../api/testfnc";
import { UserDataContext } from "../api/context/userData";
import { FacilityContext } from "../api/context/facility";
import { use, useContext, useEffect } from "react";
import {
  useUserId,
  useSand,
  useEditSand,
  useMoney,
  useEditMoney,
  useUserData,
  useLmHeights,
  useLmDescriptions,
  useTools,
  useToolMinLevels
} from "../api/context/get_edit";
import {
  useBuyFacility,
  useStockBenefit,
  useGetBenefit,
  useFacilityData,
} from "../api/game_functions";
import FacilitiesWindow from "../components/FacilitiesWindow";
import FacilitiesView from "../components/FacilitiesView";
import { Box } from "@mui/material";
import { Facility } from "../api/dataType";
import initialFacilities from "../stores/initialFacilities";

const TestPage = () => {
  const sand = useSand();
  const money = useMoney();
  const { facility, setFacility } = useFacilityData();
  const { userData, setUserData } = useUserData();
  const editSand = useEditSand();
  const editMoney = useEditMoney();
  const buyFacility = useBuyFacility();
  const stockBenefit = useStockBenefit();
  const getBenefit = useGetBenefit();
  const lmHeights = useLmHeights();
  const lmDescriptions = useLmDescriptions();
  const tools = useTools();
  const toolMinLevels = useToolMinLevels();

  const incrementMoneyTest = () => {
    if (typeof money === "number") {
      editMoney(money + 1); // お金を1増やす
    }
    console.log(lmHeights);
    console.log(lmDescriptions);
    console.log(tools);
console.log(toolMinLevels);
  };
  const unlockTest = () => {
    if (userData && userData.facility && setUserData) {
      const newUserData = { ...userData };
      for (let i = 0; i < userData.facility.length; i++) {
        if (userData.facility[i] === 0) {
          newUserData.facility[i] = 1;
          break;
        }
      }
      setUserData(newUserData);
      localStorage.setItem("userData", JSON.stringify(newUserData));
    }
  };
  const getBenefitTest = () => {
    getBenefit();
  };
  const reset = () => {
    localStorage.removeItem("userData");
    setFacility(initialFacilities);
    window.location.reload();
  };

  const dataLoaded = userData !== null && facility !== null;

  // requestAnimationFrame を使ったメインループ
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
    <div className="test-page">
      {"money: ¥" + money?.toLocaleString()}
      <br />
      <button onClick={incrementMoneyTest}>money++</button>
      <br />
      <button onClick={unlockTest}>unlock</button>
      <br />
      <button onClick={getBenefitTest}>get benefit</button>
      <br />
      <button onClick={reset}>reset</button>
      <Box
        className="ground"
        sx={{
          backgroundColor: "saddlebrown",
          width: "100%",
          height: "100px",
          position: "absolute",
          bottom: 0,
        }}
      />
      <div className="facilities-window">
        <FacilitiesWindow />
      </div>
      <div className="facilities-view">
        <FacilitiesView />
      </div>
    </div>
  );
};

export default TestPage;
