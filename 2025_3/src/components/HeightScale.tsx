import "./HeightScale.css";

function HeightScale({ elevation,value }) {
  return (
    <>
      {/* 1行目の例 */}
      <div
        className="heightScaleContainer"
        style={{ top: `${-100 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10+40}</span>
      </div>

      {/* 2行目の例 */}
      <div
        className="heightScaleContainer"
        style={{ top: `${0 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10+30}</span>
      </div>

      {/* 3行目の例 */}
      <div
        className="heightScaleContainer"
        style={{ top: `${100 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10+20}</span>
      </div>

      {/* 4行目の例 */}
      <div
        className="heightScaleContainer"
        style={{ top: `${200 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10+10}</span>
      </div>

      {/* 5行目の例 */}
      <div
        className="heightScaleContainer"
        style={{ top: `${300 + elevation}px` }}
      >
        <div className="heightScale" />
        <span className="heightScaleText">{Math.floor((value-1)/10)*10}</span>
      </div>
    </>
  );
}

export default HeightScale;
