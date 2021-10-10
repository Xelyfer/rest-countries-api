import React from "react";

import Brightness2Icon from "@mui/icons-material/Brightness2";
import Brightness5Icon from "@mui/icons-material/Brightness5";

function Header({ darkMode, handleDarkMode }) {
  return (
    <div className="header center-content space-between border-shadow">
      <p>Where in the world?</p>
      {darkMode ? (
        <div className="center-content" onClick={handleDarkMode}>
          <Brightness5Icon />
          Light Mode
        </div>
      ) : (
        <div className="center-content" onClick={handleDarkMode}>
          <Brightness2Icon />
          Dark Mode
        </div>
      )}
    </div>
  );
}

export default Header;
