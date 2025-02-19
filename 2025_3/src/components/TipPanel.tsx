import "./TipPanel.css"
import tipA from "../assets/a.png";
import tipB from "../assets/b.png";
import tipC from "../assets/c.png";

function TipPanel({image,isFading}) {
    const images = [tipA, tipB, tipC];
    return (
        <div className= {`tipPanel-container ${isFading ? "fade-out" : "fade-in"}`}>
                <div className="tipsTitle">TipsTitle</div>
            <div className="tipText-container">
                <img src={images[image]} alt="Tip"className={`image`}/>
                <h3 className="tipText">かんさいTipsを表示ここにかんさいTipsを表示ここにかんさいTipsを表示ここにかんさいTipsを表示</h3>
            </div>
        </div>
    );
}

export default TipPanel;