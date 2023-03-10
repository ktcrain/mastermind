import React, {useContext} from "react";
import useBoard from "./";

const BoardContext = React.createContext();
export default BoardContext;

const BoardContextProvider = (props) => {
  const { state, dispatch } = useBoard();

  // payload = {rowIndex, slotIndex, color} 
  function updateSlot(payload) {
    dispatch({type: 'UPDATE_SLOT', payload});
  }

  // payload = {rowIndex}
  function handleResetGame(payload) {
    dispatch({type: 'RESET', payload});
  }
  
  // payload = {rowIndex}
  function handleTabulateScore(payload) {
    dispatch({type: 'UPDATE_SCORE', payload});
  }

  return (
    <BoardContext.Provider
      value={{
        state,
        dispatch,
        updateSlot,
        handleTabulateScore,
        handleResetGame
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

function useBoardContext() {
  return useContext(BoardContext);
}

export { BoardContextProvider, useBoardContext };
