import { useEffect, useState } from "react";
import { useElevation } from "../api/context/get_edit";
import "../css_designs/Background.css";

type Size = {
  width: number;
  height: number;
};

const BG_PATH = "../../img/7238.jpg";

function Background() {
  const mountainHeight = useElevation();
  const [bgSize, setBgSize] = useState<Size | null>(null);
  const [windowSize, setWindowSize] = useState<Size | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = BG_PATH;
    img.onload = () => setBgSize({ width: img.width, height: img.height });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (mountainHeight === null || windowSize === null || bgSize === null) {
    return null;
  }

  const minBgScaleFitWidth = windowSize.width / bgSize.width; // 背景画像の幅がウィンドウの幅に合うときのスケール
  const minBgScaleFitHeight = (windowSize.height - 100) / bgSize.height; // 背景画像の高さがウィンドウの高さに合うときのスケール
  const minBgScale = Math.max(minBgScaleFitWidth, minBgScaleFitHeight); // 帯が出現しない最小のスケール

  const maxHeight = 1000;
  const heightRatio = mountainHeight / maxHeight;
  const bgScale = 1 + 2 * Math.exp(-5 * heightRatio);

  return (
    <img
      className="background"
      src={BG_PATH}
      alt="background"
      style={{
        width: bgSize.width * minBgScale * bgScale,
        height: bgSize.height * minBgScale * bgScale,
      }}
    />
  );
}

export default Background;
