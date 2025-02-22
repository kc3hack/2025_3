import "./Scale.css";

function Scale({ value }) {
  return (
    <div className="scale-item">
      {value.toFixed(1)}m
    </div>
  );
}

export default Scale;