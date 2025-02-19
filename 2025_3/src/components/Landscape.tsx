import React, { useState } from "react";
import Mountain from "./Mountain";
import Scale from "./Scale";
import Status from "./Status";
import TipPanel from "./TipPanel";
import "./Landscape.css";

import tipA from "../assets/a.png";
import tipB from "../assets/b.png";
import tipC from "../assets/c.png";

function Landscape() {
  const images = [tipA, tipB, tipC];
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
      if (isVisible) return;
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        // フェードアウトのアニメーションが終わる0.5秒後に次の画像に切り替える
        setTimeout(() => {
          // 配列の長さで割った余りを使って循環させる
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setAnimationIndex((prevIndex) => prevIndex + 1);
        }, 500);
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
          <TipPanel image={images[currentIndex]} isFading={isVisible}/>
        </div>
        <div className="box mountain">
          <Mountain onButtonClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
}

export default Landscape;