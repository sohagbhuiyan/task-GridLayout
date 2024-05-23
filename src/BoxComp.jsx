import React, { useState } from "react";
import "./box.css";

const BoxComp = ({ id, handleClick, children }) => {
  return (
    <div className="parent-box" >
      <div className="box" onClick={() => handleClick(id, "horizontal")}>
        H
      </div>
      <div className="box" onClick={() => handleClick(id, "vertical")}>
        V
      </div>
      <div className="children-boxes">{children}</div>
    </div>
  );
};

export default BoxComp;
