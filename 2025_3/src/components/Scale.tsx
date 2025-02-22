import "../css_designs/Scale.css";

function Scale({ value }) {
  return (
    <div className="scale-item">
      {value === null ? "" : value.toFixed(2)}m
    </div>
  );
}

export default Scale;
