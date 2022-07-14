import React from "react";
import Navbar from "./Navbar";
function Content(props) {
  return (
    <div className="content">
      <Navbar />
      <div className="content-wrap">{props.children}</div>
    </div>
  );
}

export default Content;
