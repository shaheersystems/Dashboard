import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="info">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-javascript"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M7.5 8h3v8l-2 -1" />
            <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
          </svg>
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