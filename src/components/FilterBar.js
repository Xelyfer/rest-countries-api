import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function FilterBar({ handleFilterBy }) {
  const [clicked, setClicked] = useState(false);

  function handleFilter({ target }) {
    handleFilterBy(target.innerText);
    setClicked(false);
  }

  return (
    <div>
      <p
        className="filter-bar center-content border-shadow"
        onClick={() => setClicked(!clicked)}
      >
        Filter by Region
        <KeyboardArrowDownIcon />
      </p>
      {clicked ? (
        <ul className="filter-list border-shadow">
          <li onClick={handleFilter}>All</li>
          <li onClick={handleFilter}>Africa</li>
          <li onClick={handleFilter}>Americas</li>
          <li onClick={handleFilter}>Asia</li>
          <li onClick={handleFilter}>Europe</li>
          <li onClick={handleFilter}>Oceania</li>
        </ul>
      ) : null}
    </div>
  );
}

export default FilterBar;
