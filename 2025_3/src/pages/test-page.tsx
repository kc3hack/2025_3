// Facilities.tsx の動作を確認するためのテストページ

import Facilities from "../components/FacilitiesWindow";
import "../css_designs/test-page.css";
<<<<<<< HEAD
import { useState } from "react";
import initialFacilities from "../stores/facilities";

type Facility = {
  name: string;
  img_path: string;
  efficiency: number;
  cost: number;
  magnification: number;
  isLocked: boolean;
  level: number;
  stock: number;
};

function TestPage() {
  const [money, setMoney] = useState(10_000_000);
  const [facilities, setFacilities] = useState<Facility[]>(initialFacilities);

  return (
    <div className="test-page">
      {"money: " + money}
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <h1>Test Page</h1>
      <div className="facilities">
        <Facilities
          money={money}
          setMoney={setMoney}
          facilities={facilities}
          setFacilities={setFacilities}
        />
      </div>
    </div>
  );
}

export default TestPage;
=======
import { testfnc1 } from "../api/testfnc";
import { UserDataContext } from "../api/context/userData";
import { FacilityContext } from "../api/context/facility";
import { useContext } from "react";
import { useUserId, useSand, useEditSand, useMoney,useEditMoney } from "../api/context/get_edit";
import { useBuyFacility,useStockBenefit,useGetBenefit } from "../api/context/game_functions";

const TestPage = () => {
  const sand = useSand();
  const money = useMoney();
  const context = useContext(FacilityContext);
  const userData = useContext(UserDataContext);
  const editSand = useEditSand();
  const editMoney = useEditMoney();
  const buyFacility1 = useBuyFacility(1);
  const stockBenefit = useStockBenefit();
  const getBenefit = useGetBenefit();


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
    //buyFacility1();
    //stockBenefit();
    getBenefit();
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


>>>>>>> api_development
