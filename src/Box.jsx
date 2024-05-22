import React, { useState } from "react";
import "./box.css";
const Box = () => {
    const [spitDirection , setSplitDirection] = useState("horizontal");
    const handleClick = (direction)=>{
        setSplitDirection(direction)
    }
  return (
    <>
      <div className={`split ${spitDirection}`}>
        <div className="container">
          <div className="box" onClick={()=>handleClick(<Box/>)}>V</div>
          <div className="box" onClick={()=>handleClick(<Box/>)}>H</div>
        </div>
      </div>
    </>
  );
};

export default Box;
