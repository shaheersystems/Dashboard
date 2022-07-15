import React from "react";

function Navbar() {
  return (
    <div className="nav-wrap">
      <div className="navbar">
        <div className="title">
          <h2>Projects</h2>
        </div>
        <div className="tabs">
          <span className="active-tab">All</span>
          <span>Current</span>
          <span>Finished</span>
          <span>On Hold</span>
          <span>Archive</span>
        </div>
        <div className="title">
          <h3>Timothy</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
