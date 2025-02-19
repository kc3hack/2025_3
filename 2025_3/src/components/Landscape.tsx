import React, { useState , useRef} from "react";
import Mountain from "./Mountain";
import Scale from "./Scale";
import Status from "./Status";
import TipPanel from "./TipPanel";
import "./Landscape.css";



function Landscape() {
 
  const animationTriggers = [10, 20 ,30];

  const [animationIndex, setAnimationIndex] = useState<number>(0);
  const [scaleValue, setScaleValue] = useState(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);




  const handleButtonClick = () => {
    const newScaleValue = scaleValue + 1;
    setScaleValue(newScaleValue);
    if (
      animationIndex < animationTriggers.length &&
      newScaleValue === animationTriggers[animationIndex]
    ) {
       // 次のアニメーションのために目標値を更新
        setAnimationIndex((prevIndex) => prevIndex + 1);
        setCurrentIndex((prevIndex) => (prevIndex + 1));
        // 新たにアニメーションを開始する
        setIsVisible(true);
        // フェードイン状態で5秒待つ
       window.setTimeout(() => {
          setIsVisible(false);

      }, 5000);
    }
  };

  return (
    <div className="landscape">
      <div className="container">
        <div className="box scale">
          <div className="inner-container">
            <Scale value={scaleValue}/>
          </div>
        </div>
        <div className="box status">
        <Status />
        </div>
        <div className="box tipPanel">
          <TipPanel image={currentIndex-1} isFading={isVisible}/>
        </div>
        <div className="box mountain">
          <Mountain onButtonClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
}

export default Landscape;