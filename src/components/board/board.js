import React from "react";
import { GamePlayingComponent } from "./";
import { BoardContextProvider } from "./";
import "./board.scss";

function Board() {
  // const componentMap = [];
  // // componentMap["GAME_WELCOME"] = GameWelcomeComponent;
  // componentMap["GAME_PLAYING"] = GamePlayingComponent;
  // // componentMap["GAME_OVER"] = GameOverComponent;
  // const ActiveComponent = componentMap[status];

  return (
    <div className="Board">
      <BoardContextProvider>
        <GamePlayingComponent className="Board-Page" />
      </BoardContextProvider>
    </div>
  );
}

export default Board;
