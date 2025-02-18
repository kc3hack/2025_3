// Facilities.tsx の動作を確認するためのテストページ

import Facilities from "../components/Facilities";
import "../css_designs/test-page.css";
import { useState } from "react";

type Facility = {
  name: string;
  img_path: string;
  efficiency: number;
  cost: number;
  magnification: number;
  isLocked: boolean;
};

function TestPage() {
  const facilities: Facility[] = [];
  for (let i = 0; i < 10; i++) {
    facilities.push({
      name: "施設" + i,
      img_path: "/landmark_oosakajou.png",
      efficiency: 1.0,
      cost: 1000000 * (i + 1),
      magnification: 2.0,
      isLocked: true,
    });
  }
  facilities[0].isLocked = facilities[1].isLocked = false;

  const [money, setMoney] = useState(10_000_000);

  const [levels, setLevels] = useState<number[]>(
    Array(facilities.length).fill(0)
  );

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
          facilities={facilities}
          money={money}
          setMoney={setMoney}
          facilitylevels={levels}
          setLevels={setLevels}
        />
      </div>
    </div>
  );
}

export default TestPage;
