// BoxComp.js
import React from "react";
import "./box.css";

const BoxComp = ({ id, handleClick, direction, children }) => {
  return (
    <div className="parent-box">
      <div className="box" onClick={() => handleClick(id, "horizontal")}>
        H
      </div>
      <div className="box" onClick={() => handleClick(id, "vertical")}>
        V
      </div>
      <div className={`children-boxes ${direction}`}>
        {children}
      </div>
    </div>
  );
};

export default BoxComp;
