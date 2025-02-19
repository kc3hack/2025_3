import "./TipPanel.css"
function TipPanel({image,isFading}) {
    return (
        <div className="tipPanel-container">
            <img src={image} alt="Tip"className={`image ${isFading ? "fade-out" : "fade-in"}`}/>
        </div>
    );
}

export default TipPanel;