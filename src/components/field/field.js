import React from "react";
import Row from "../row";
import { useBoardContext } from "../board";

import "./field.scss";

function Field() {
  const { state } = useBoardContext();
  // console.log("Field", state);
  return (
    <div className="Field">
      {state.field.map((row, rowIndex) => (
        <Row {...row} rowIndex={rowIndex} key={`Field-Row-${rowIndex}`} />
      ))}
    </div>
  );
}

export default Field;
