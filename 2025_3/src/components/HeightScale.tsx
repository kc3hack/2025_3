import "../css_designs/HeightScale.css";

function HeightScale({ elevation, value }) {
  // それぞれの横線の表示値を計算
  const computed1 = Math.floor((value ) / 10) * 10 + 40;
  const computed2 = Math.floor((value ) / 10) * 10 + 30;
  const computed3 = Math.floor((value ) / 10) * 10 + 20;
  const computed4 = Math.floor((value ) / 10) * 10 + 10;
  const computed5 = Math.floor((value ) / 10) * 10;

  // 背景色を決定する関数
  const getLineColor = (computedValue: number) => {
    if (computedValue %100 === 0) {
      return "red";
    }
    return computedValue % 50 === 0 ? "blue" : "rgb(255,251,0)";
  };

  return (
    <>
      <div
        className="heightScaleContainer"
        style={{ top: `${0 + elevation}px` }}
      >
        <div
          className="heightScale"
          style={{ backgroundColor: getLineColor(computed1) }}
        />
        <span className="heightScaleText">{computed1}</span>
      </div>

      <div
        className="heightScaleContainer"
        style={{ top: `${100 + elevation}px` }}
      >
        <div
          className="heightScale"
          style={{ backgroundColor: getLineColor(computed2) }}
        />
        <span className="heightScaleText">{computed2}</span>
      </div>

      <div
        className="heightScaleContainer"
        style={{ top: `${200 + elevation}px` }}
      >
        <div
          className="heightScale"
          style={{ backgroundColor: getLineColor(computed3) }}
        />
        <span className="heightScaleText">{computed3}</span>
      </div>

      <div
        className="heightScaleContainer"
        style={{ top: `${300 + elevation}px` }}
      >
        <div
          className="heightScale"
          style={{ backgroundColor: getLineColor(computed4) }}
        />
        <span className="heightScaleText">{computed4}</span>
      </div>

      <div
        className="heightScaleContainer"
        style={{ top: `${400 + elevation}px` }}
      >
        <div
          className="heightScale"
          style={{ backgroundColor: getLineColor(computed5) }}
        />
        <span className="heightScaleText">{computed5}</span>
      </div>
    </>
  );
}

export default HeightScale;
