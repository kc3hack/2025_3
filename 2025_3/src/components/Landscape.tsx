import React, { useState } from "react";
import Mountain from "./Mountain";
import Scale from "./Scale";
import Status from "./Status";
import TipPanel from "./TipPanel";
import "./Landscape.css";
import HeightScale from "./HeightScale";

const MAX_ELEVATION = 100;

function Landscape({statusValue}) {
 
  const animationTriggers = [10, 20 ,30];

  const [animationIndex, setAnimationIndex] = useState<number>(0);
  const [scaleValue, setScaleValue] = useState(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [elevation, setElevation] = useState<number>(0);

  const incleaseScaleValue = 1; 

  const handleButtonClick = () => {
    setElevation((prev) => {
      let next = prev + (incleaseScaleValue%10)*10;
      if(next === 0 ){
        next = prev + 100;
      }
      const buffer = 100-next;
      if(buffer < 0){
        next  = next - 100;
      }
      console.log(buffer+"buffer");
      console.log(next+"next");
      // 最大値を超えたら0に戻す（または初期値にリセット）
      return next > MAX_ELEVATION ? (incleaseScaleValue%10)*10: next;
    });
    const newScaleValue = scaleValue + incleaseScaleValue;
    setScaleValue(newScaleValue);
    if (
      animationIndex < animationTriggers.length &&
      newScaleValue >= animationTriggers[animationIndex]
    ) {
       // 次のアニメーションのために目標値を更新
        setAnimationIndex((prevIndex) => prevIndex + 1);
        setCurrentIndex((prevIndex) => (prevIndex + 1));
        if(isVisible)return;
        // 新たにアニメーションを開始する
        setIsVisible(true);
        // フェードイン状態で5秒待つ
        window.setTimeout(() => {
          setIsVisible(false);
        }, 5000);
    }
  };

  return (
    <>
        <div className="landscape">
            <HeightScale elevation={elevation} value={scaleValue}/>
          <div className="container">
            <div className="box scale">
              <div className="inner-container">
                <Scale value={scaleValue}/>
              </div>
            </div>
            <div className="box status">
            <Status  value = {statusValue}/>
            </div>
            <div className="box tipPanel">
              <TipPanel imageIndex={currentIndex-1} isFading={isVisible}/>
            </div>
            <div className="box mountain">
              <Mountain onButtonClick={handleButtonClick}/>
            </div>
          </div>
        </div>
    </>
  );
}

export default Landscape;