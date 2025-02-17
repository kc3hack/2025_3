import "../css_designs/test-page.css";
import { testfnc1 } from "../api/testfnc";
import { UserDataContext } from "../api/context/userData";
import { useContext } from "react";
import { useUserId, useSand, useEditSand } from "../api/context/get_edit";

const TestPage = () => {
  const sand = useSand();
  const context = useContext(UserDataContext);
  const editSand = useEditSand();

  if (!context) {
    return <div>Loading...</div>;
  }

  const { userData } = context;

  const buttonTest = () => {
    if (typeof sand === "number") {
      editSand(sand + 1); // 砂の量を1増やす
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="testDiv Case3">div3
        <div className="testDiv Case4">{sand}</div>
        <div className="testDiv Case5">{userData.sand}</div>
        <button className="testButton" onClick={buttonTest}>Click Me</button>
      </div> 
      <div className="testDiv Case1">div1</div>
      <div className="testDiv Case2">div2</div>
    </>
  );
};

export default TestPage;