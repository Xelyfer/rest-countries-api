import React from "react";

function CustomButton({ className, task, text, icon }) {
  return (
    <div>
      <p
        className={`center-content button border-shadow ${className}`}
        onClick={task}
      >
        {icon} {text}
      </p>
    </div>
  );
}

export default CustomButton;
