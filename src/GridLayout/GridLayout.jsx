import React, { useState } from "react";
import "./gridLayout.css";

const GridLayout = () => {
  const alphabet = [];
  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  const [clickletter, setClickLetter] = useState([]);

  const handleClick = (letter) => {
    const n = clickletter.length;
    if (
      clickletter[n - 1] === clickletter[n - 2] &&
      clickletter[n - 2] == letter
    ) {
      setClickLetter((prevLetter) => [...prevLetter.slice(0, n - 2), "_"]);
      return;
    }
    setClickLetter((prevLetter) => [...prevLetter, letter]);
  };

  return (
    <>
      <div className="output">{clickletter.join(" ")}</div>
      <div className="grid">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="card"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
    </>
  );
};

export default GridLayout;
