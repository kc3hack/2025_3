import React, { useState } from "react";
import Mountain from "./Mountain";
import Scale from "./Scale";
import Status from "./Status";
import TipPanel from "./TipPanel";
import "./Landscape.css";
import HeightScale from "./HeightScale";
import {
  useSand,
  useEditSand,
  useElevation,
  useEditElevation,
} from "../api/context/get_edit";

import{
  useCalcElevation,   
}from "../api/game_functions";

const MAX_ELEVATION = 100;

function Landscape({statusValue,tipsHeightList}: {statusValue:number,tipsHeightList:number[]}) {
  const scale = useElevation();
  const sand = useSand();
  const calcElevation = useCalcElevation();
  const editSand = useEditSand();
  const editElevation = useEditElevation();
  const animationTriggers = tipsHeightList;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [animationIndex, setAnimationIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [elevation, setElevation] = useState<number>(0);

  const handleButtonClick = () => {
    setElevation((prev) => {
      if (typeof sand === "number") {
        editSand(sand + 100); // 砂を1増やす
        
      }
      calcElevation();
      let next = (scale%10)*10;
      if(next === 0 ){
        next = 100;
      }
      const buffer = 100-next;
      if(buffer < 0){
        next  = next - 100;
      }
      console.log(scale+"scale"); 
      console.log(sand+"sand");
      // 最大値を超えたら0に戻す（または初期値にリセット）
      return next > MAX_ELEVATION ? (scale%10)*10: next;
    });

    if (
      animationIndex < animationTriggers.length &&
      scale >= animationTriggers[animationIndex]
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
            <HeightScale elevation={elevation} value={scale}/>
          <div className="container">
            <div className="box scale">
              <div className="inner-container">
                <Scale value={scale}/>
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