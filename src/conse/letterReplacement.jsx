import React from "react";
import "./cons_letter.css";
const letterReplacement = () => {
  const letter = ["A", "B", "C", "F", "F", "F", "G"];
  const counts = letter.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  const result = letter.map((value) => (counts[value] > 1 ? "_" : value));
  const uniqueRes = result.reduce((acc, value) => {
    if (value === "_") {
      if (acc[acc.length - 1] !== "_") {
        acc.push(value);
      }
    } else {
      acc.push(value);
    }
    return acc;
  }, []);
  return <div className="display">{uniqueRes}</div>;
};
export default letterReplacement;
