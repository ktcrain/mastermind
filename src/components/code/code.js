import React from "react";
import Slots from "../slots";
import "./code.scss";

function Code({ values, hidden, solved }) {
  return (
    <div className="Code">
      <div className="Code-Slots">
        <Slots hidden={hidden} editable={false} rowIndex={-1} values={values} />
      </div>
      <div className="Code-DisplayOver">
        {!hidden && <span>{solved ? "🏆" : "❌"}</span>}
      </div>
    </div>
  );
}

export default Code;
