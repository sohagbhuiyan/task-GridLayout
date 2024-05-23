import React from "react";
import "./gridLayout.css";
import { useState } from "react";
const GridLayout = () => {
    const alphabet = [];
    const [clickletter, setClickLetter] = useState(null);
  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }
const handleClick=(letter)=>{
    setClickLetter((prevletter)=>[...prevletter,letter]);
}

  return (
    <>
      <div className="output" >{clickletter} </div>
      <button>Clear</button>
      <div className="grid">
        {alphabet.map((letter) => (
          <div key={letter} className="card"  onClick={()=> handleClick(letter)} >{letter}</div>
        ))}
      </div>

    </>
  );
};

export default GridLayout;
