import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ handleSearch }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar center-content border-shadow">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchText}
        onChange={({ target }) => {
          setSearchText(target.value);
        }}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            handleSearch(searchText);
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
