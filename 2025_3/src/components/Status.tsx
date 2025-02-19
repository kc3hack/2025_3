import "./Status.css";
function Status({value}) {
  return (
    <div className="status-item">
        {value}円
    </div>
  )
}
export default Status;