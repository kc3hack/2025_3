import "../css_designs/test-page.css";
import { testfnc1 } from "../api/testfnc";
const TestPage = () => {
    // const buttonTest = () => {  console.log("Button Clicked");  };
  return (
    <>
  

<div className="testDiv Case3">div3
    <div className="testDiv Case4">div4</div>
    <div className="testDiv Case5">div5</div>
    <button className="testButton" onClick={testfnc1}>Click Me</button>
   </div> 
     <div className="testDiv Case1">div1</div>
    <div className="testDiv Case2">div2</div>

    </>
  );
};
export default TestPage;