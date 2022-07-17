import React from "react";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div className="input">
        <input
          type="text"
          placeholder="Search"
          onChange={props.searchHandler}
        />
      </div>
      <div className="add">
        <button>
          <span className="material-icons">add</span> Add New Project
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
