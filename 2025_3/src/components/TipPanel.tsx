import "./TipPanel.css"
function TipPanel({image,isFading}) {
    return (
        <div className= {`tipPanel-container ${isFading ? "fade-out" : "fade-in"}`}>
                <div className="tipsTitle">TipsTitle</div>
            <div className="tipText-container">
                <img src={image} alt="Tip"className={`image`}/>
                <h3 className="tipText">かんさいTipsを表示ここにかんさいTipsを表示ここにかんさいTipsを表示ここにかんさいTipsを表示</h3>
            </div>
        </div>
    );
}

export default TipPanel;