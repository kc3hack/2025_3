import "./HeightScale.css";

function HeightScale({ elevation,value }) {
  return (
    <>
      <div
        className="heightScaleContainer"
        style={{ top: `${-100 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10+40}</span>
      </div>

      <div
        className="heightScaleContainer"
        style={{ top: `${0 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10+30}</span>
      </div>


      <div
        className="heightScaleContainer"
        style={{ top: `${100 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10+20}</span>
      </div>


      <div
        className="heightScaleContainer"
        style={{ top: `${200 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10+10}</span>
      </div>

 
      <div
        className="heightScaleContainer"
        style={{ top: `${300 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10}</span>
      </div>

      <div
        className="heightScaleContainer"
        style={{ top: `${400 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10-10}</span>
      </div>
    </>
  );
}

export default HeightScale;
