import { useState } from "react";
import Mountain from "./Mountain";
import Scale from "./Scale";
import Status from "./Status";
import TipPanel from "./TipPanel";
import "./Landscape.css";
import HeightScale from "./HeightScale";
import { useElevation, useLmHeights } from "../api/context/get_edit";
import { useAddSand, useUnlockFacility } from "../api/game_functions";

const MAX_ELEVATION = 100;

function Landscape({ statusValue }: { statusValue: number }) {
  const animationTriggers = useLmHeights() || [];
  const scale = useElevation();
  const addSand = useAddSand();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animationIndex, setAnimationIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [elevation, setElevation] = useState<number>(0);
  const unlockFacility = useUnlockFacility();

  const handleButtonClick = () => {
    console.log("mountain clicked");
    if (scale === null) return;
    const newScale = addSand();
    setElevation((prev) => {
      let next = (scale % 10) * 10;
      if (next === 0) {
        next = 100;
      }
      const buffer = 100 - next;
      if (buffer <= 0) {
        next = next - 100;
      }
      // 最大値を超えたら0に戻す（または初期値にリセット）
      return next >= MAX_ELEVATION ? (scale % 10) * 10 : next;
    });

    // ランドマークの標高を超えたとき
    if (
      animationIndex < animationTriggers.length &&
      newScale >= animationTriggers[animationIndex]
    ) {
      // 次のアニメーションのために目標値を更新
      setAnimationIndex((prevIndex) => prevIndex + 1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      // 新たにアニメーションを開始する
      setIsVisible(true);
      // フェードイン状態で5秒待つ
      window.setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // 施設をアンロック
      unlockFacility(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="landscape">
        <HeightScale elevation={elevation} value={scale} />
        <div className="container">
          <div className="box scale">
            <div className="inner-container">
              <Scale value={scale} />
            </div>
          </div>
          <div className="box status">
            <Status value={statusValue} />
          </div>
          <div className="box tipPanel">
            <TipPanel imageIndex={currentIndex - 1} isFading={isVisible} />
          </div>
          <div className="box mountain">
            <Mountain onButtonClick={handleButtonClick} />
          </div>
        </div>
        <div className="ground" />
      </div>
    </>
  );
}

export default Landscape;
