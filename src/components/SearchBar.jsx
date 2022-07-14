import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="input">
        <input type="text" placeholder="Search" />
      </div>
      <div className="display">
        <span class="material-icons">table_rows</span>
        <span class="material-icons active">grid_view</span>
      </div>
    </div>
  );
}

export default SearchBar;
