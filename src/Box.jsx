// Box.js
import React, { useState } from "react";
import "./box.css";
import BoxComp from "./BoxComp";

const Box = () => {
  const [boxes, setBoxes] = useState([{ id: 1, parentId: null, direction: null }]);

  const handleClick = (id, direction) => {
    setBoxes((prevBoxes) => [
      ...prevBoxes,
      { id: prevBoxes.length + 1, parentId: id, direction },
    ]);
  };

  const renderBoxes = (parentId, direction) => {
    const children = boxes.filter((box) => box.parentId === parentId);

    if (children.length === 0) {
      return null;
    }

    // const direction = children[0].direction;

    return (
      <div className={`children-boxes ${direction}`}>
        {children.map((box) => (
          <BoxComp
            key={box.id}
            id={box.id}
            handleClick={handleClick}
            direction={box.direction}
          >
            {renderBoxes(box.id)}
          </BoxComp>
        ))}
      </div>
    );
  };

  return <div className="root-box">{renderBoxes(null, null)}</div>;
};

export default Box;
