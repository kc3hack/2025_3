import Facilities from "../components/FacilitiesWindow";
import "../css_designs/test-page.css";
import { testfnc1 } from "../api/testfnc";
import { UserDataContext } from "../api/context/userData";
import { FacilityContext } from "../api/context/facility";
import { useContext } from "react";
import {
  useUserId,
  useSand,
  useEditSand,
  useMoney,
  useEditMoney,
} from "../api/context/get_edit";
import {
  useBuyFacility,
  useStockBenefit,
  useGetBenefit,
} from "../api/context/game_functions";
import FacilitiesWindow from "../components/FacilitiesWindow";

const TestPage = () => {
  const sand = useSand();
  const money = useMoney();
  const context = useContext(FacilityContext);
  const { userData, setUserData } = useContext(UserDataContext);
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

  return (
    <div className="test-page">
      {"money: ¥" + money?.toLocaleString()}
      <br />
      <button onClick={buttonTest}>money++</button>
      <br />
      <button onClick={buttonTest2}>unlock</button>
      <div className="facilities">
        <FacilitiesWindow />
      </div>
    </div>
  );
};

export default TestPage;
