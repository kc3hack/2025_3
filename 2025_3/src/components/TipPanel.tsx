import "./TipPanel.css"
import tipA from "../assets/a.png";
import tipB from "../assets/b.png";
import tipC from "../assets/c.png";

function TipPanel({imageIndex,isFading}) {
    const images = [tipA, tipB, tipC];
    const tipsTitles = ["TipsTitleA","TipsTitleB","TipsTitleC"];
    const tipsText = ["TipsA","TipsB","TipsC"];
    return (
        <div className= {`tipPanel-container ${isFading ? "fade-out" : "fade-in"}`}>
                <div className="tipsTitle">{tipsTitles[imageIndex]}</div>
            <div className="tipText-container">
                <img src={images[imageIndex]} alt="Tip"className={`image`}/>
                <h3 className="tipText">{tipsText[imageIndex]}</h3>
            </div>
        </div>
    );
}

export default TipPanel;