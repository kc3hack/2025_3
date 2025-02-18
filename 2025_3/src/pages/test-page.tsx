import "../css_designs/test-page.css";
import { testfnc1 } from "../api/testfnc";
import { UserDataContext } from "../api/context/userData";
import { FacilityContext } from "../api/context/facility";
import { useContext } from "react";
import { useUserId, useSand, useEditSand, useMoney,useEditMoney } from "../api/context/get_edit";
import { useBuyFacility } from "../api/context/game_functions";

const TestPage = () => {
  const sand = useSand();
  const money = useMoney();
  const context = useContext(FacilityContext);
  const userData = useContext(UserDataContext);
  const editSand = useEditSand();
  const editMoney = useEditMoney();
  const buyFacility1 = useBuyFacility(1);


  const buttonTest = () => {
    // if (typeof sand === "number") {
    //   editSand(sand + 1); // 砂の量を1増やす
    // }
    if (typeof money === "number") {
     editMoney(money + 1); // お金を1増やす
    }
    console.log(context);
    console.log(userData);
  };
  const buttonTest2 = () => {
    buyFacility1();
    console.log(userData);
  }



  return (
    <>
      <div className="testDiv Case3">div3
        <div className="testDiv Case4">{sand}</div>
        <div className="testDiv Case5">{money}</div>
        <button className="testButton" onClick={buttonTest}>Click Me1</button>
        <button className="testButton2" onClick={buttonTest2}>Click Me2</button>
      </div> 
      <div className="testDiv Case1">div1</div>
      <div className="testDiv Case2">div2</div>
    </>
  );
};

export default TestPage;