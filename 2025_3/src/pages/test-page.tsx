// Facilities.tsx の動作を確認するためのテストページ

import Facilities from "../components/Facilities";
import "../css_designs/test-page.css";
import { useState } from "react";
import facilities from "../stores/facilities";

function TestPage() {
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
