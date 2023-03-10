import React, { Fragment } from "react";
import Field from "../field";
import Code from "../code";
import { useBoardContext } from "./";
import Replay from "../replay";

function GamePlayingComponent() {
  const { state, handleResetGame } = useBoardContext();
  const { status, field, code } = state;
  const isGameOver = status === "GAME_OVER";
  const guess = field[field.length - 1];
  const solved = guess.solved;

  console.log("isGameOver, field.length, guess, code", isGameOver, field.length, guess, code);

  const handleResetButton = () => {
    console.log("Resetting game now");
    handleResetGame();
  };

  return (
    <Fragment>
      <Code values={code} hidden={!isGameOver} solved={solved} />
      {isGameOver && <Replay solved={solved} onClick={handleResetButton} />}
      <Field />
    </Fragment>
  );
}

export default GamePlayingComponent;
