import React from "react";
import Slots from "../slots";
import Score from "./score";
import "./row.scss";
import { useBoardContext } from "../board";

// [TODO] Module this
function PlayButton(props) {
  return (
    <button className="PlayButton" {...props}>
      &gt;
    </button>
  );
}

function Row({ rowIndex, scored, values, scores }) {
  const { handleTabulateScore } = useBoardContext();

  const handleScoreButton = (e) => {
    e.target.setAttribute("disabled", "disabled");
    handleTabulateScore({ rowIndex });
  };

  // Button is enabled initially based on complete guess
  // (no NULLs allowed)
  const selected = values.filter((value) => value !== null);
  const disabled = selected.length < values.length;

  return (
    <div className="Row">
      <Slots values={values} rowIndex={rowIndex} editable={!scored} />
      {scored ? (
        <Score scores={scores} />
      ) : (
        <PlayButton disabled={disabled} onClick={(e) => handleScoreButton(e)} />
      )}
    </div>
  );
}

export default Row;
