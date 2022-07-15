import React, { useState } from "react";

function SearchBar() {
  const [active, setActive] = useState("two");
  const handleOne = () => {
    setActive("one");
  };
  const handleTwo = () => {
    setActive("two");
  };
  return (
    <div className="search-bar">
      <div className="input">
        <input type="text" placeholder="Search" />
      </div>
      <div className="display">
        <span
          class={`material-icons ${active === "one" ? "active" : ""}`}
          title="List view"
          onClick={handleOne}
        >
          table_rows
        </span>
        <span
          class={`material-icons ${active === "two" ? "active" : ""}`}
          title="Grid View"
          onClick={handleTwo}
        >
          grid_view
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
