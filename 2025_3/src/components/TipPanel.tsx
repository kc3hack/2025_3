
import "../css_designs/TipPanel.css";
import tipA from "../assets/a.png";
import tipB from "../assets/b.png";
import tipC from "../assets/c.png";
import{
    useLmNames,
    useLmDescriptions,
    useLmImgPaths,
}from "../api/context/get_edit";

function TipPanel({imageIndex,isFading}) {
    const images = useLmImgPaths() || [tipA,tipB,tipC];
    const tipsTitles = useLmNames() || ["TipA","TipB","TipC"];
    const tipsText =useLmDescriptions() || ["TipA","TipB","TipC"];
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
