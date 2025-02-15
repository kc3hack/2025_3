import "../css_designs/design-test.css";
const DesignPage = () => {
    const buttonTest = () => {  console.log("Button Clicked");  };
  return (
    <>
  

<div className="designDiv Case3">box3
    <div className="designDiv Case4">element</div>
    <div className="designDiv Case5">element</div>
    <button className="designButton" onClick={buttonTest}>Click Me</button>
   </div> 
     <div className="designDiv Case1">box1</div>
    <div className="designDiv Case2">box2</div>

    </>
  );
};
export default DesignPage;