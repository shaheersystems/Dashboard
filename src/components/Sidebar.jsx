import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="navigate">
        <span className="material-icons active" title="Projects">
          dashboard
        </span>
        <span className="material-icons" title="Timeline">
          timeline
        </span>
        <span className="material-icons" title="Calender">
          trip_origin
        </span>
        <span className="material-icons" title="Deadlines">
          pie_chart
        </span>
      </div>
      <div className="settings">
        <span className="material-icons" title="Settings">
          settings
        </span>
        <span className="material-icons" title="Search">
          search
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
