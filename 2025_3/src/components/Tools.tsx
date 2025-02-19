import "../components/Tools.css";
import { useState } from "react";
import tipA from "../assets/a.png";
import tipB from "../assets/b.png";
import tipC from "../assets/c.png";

const Tools = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [tipA, tipB, tipC];

  const buttonTest2 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="testDiv Case2">
        div2
        <div className="testDiv11 ">
          ➡
        </div>
        <div className="testDiv Case6">
          <img src={images[currentImageIndex]} alt="画像1" />
        </div>
        <div className="testDiv Case7">
          <img src={images[(currentImageIndex + 1) % images.length]} alt="画像2" />
        </div>
        <button className="testButton" onClick={buttonTest2}>
          Change Image
        </button>
      </div>
    </>
  );
};

export default Tools;