import './Spinner.css';
export function Spinner() {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
  // return <div className="loading">Loading&#8230;</div>;
}
