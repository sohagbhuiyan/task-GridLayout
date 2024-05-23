import React, { useState } from "react";
import "./box.css";
import BoxComp from "./BoxComp";

const Box = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, parentId: null, direction: null },
  ]);

  const handleClick = (id, direction) => {
    setBoxes((prevBoxes) => [
      ...prevBoxes,
      { id: prevBoxes.length + 1, parentId: id, direction:'vertical'},

    ]);
  };

  const renderBoxes = (parentId) => {
    return boxes
      .filter((box) => box.parentId === parentId)
      .map((box) => (
        <BoxComp key={box.id} id={box.id} handleClick={handleClick} direction={box.direction} >
          {renderBoxes(box.id)}
        </BoxComp>
      ));
  };

  return <div className="root-box">{renderBoxes(null)}</div>;
};

export default Box;
