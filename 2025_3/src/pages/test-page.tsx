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

  const buttonTest = () => {
    if (typeof money === "number") {
      editMoney(money + 1); // お金を1増やす
    }
  };
  const buttonTest2 = () => {
    if (userData && userData.facility && setUserData) {
      const newUserData = { ...userData };
      for (let i = 0; i < userData.facility.length; i++) {
        if (userData.facility[i] === 0) {
          newUserData.facility[i] = 1;
          break;
        }
      }
      setUserData(newUserData);
    }
  };
  const buttonTest3 = () => {
    getBenefit();
  };

  // 1fpsのメインループ
  useEffect(() => {
    const interval = setInterval(() => {
      if (userData && userData.facility) {
        stockBenefit();
        const stocks = facility.map((fac: Facility) => fac.stock);
        console.log("stocks", stocks);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [userData, facility, stockBenefit]);

  return (
    <div className="test-page">
      {"money: ¥" + money?.toLocaleString()}
      <br />
      <button onClick={buttonTest}>money++</button>
      <br />
      <button onClick={buttonTest2}>unlock</button>
      <br />
      <button onClick={buttonTest3}>get benefit</button>
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
