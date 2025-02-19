// Facilities.tsx の動作を確認するためのテストページ

import Facilities from "../components/FacilitiesWindow";
import "../css_designs/test-page.css";
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
