import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="info">
        <div className="icon">
          <h2>{props.title}</h2>
        </div>
        <div className="metadata">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar">
          <div className="percentage">
            <div className="fill" style={{ width: props.progress }}></div>
          </div>
          <span className="num">{props.progress}</span>
        </div>
        <div className="days-left">
          <span className="days">{props.daysLeft} Days Left</span>
          <span className="material-icons">open_in_new</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
