import React from "react";
import { useBoardContext } from './';

function GameWelcomeComponent({className, handleGameStart}) {

  const { dispatch } = useBoardContext();

  const onClick = (e) => {
    dispatch({type: "RESET"});
    handleGameStart(e);
  }

  return (
    <div className={`${className} ${className}--GAME_WELCOME`}>
      <h2>Welcome Screen</h2>
      <p>Full background Loading animation</p>
      <button className="btn btn--primary" onClick={onClick}>Begin Game</button>
    </div>
  );
};

export default GameWelcomeComponent;