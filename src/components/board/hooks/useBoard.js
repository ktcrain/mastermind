import { useContext, useReducer } from "react";
import { BoardContext } from "../";
import { getRandomColors } from "../../../utils/colors";

// how many pegs per row
// [TODO] This has bugs. Test and fix them.
const codeLength = 4;

// each exact match is worth 2 poimts;
const solvedTotal = codeLength * 2;

// the number of tries / rounds
const maxTries = 10;

/**
 *
 * @param {*} state
 * @param {*} action
 */
function boardReducer(state, action) {
  const { type, payload } = action;
  console.log("boardReducer", type, payload);

  const editRow = (rowIndex, st) =>
    (state.field[rowIndex] = Object.assign({}, {...state.field[rowIndex]}, st));

  switch (type) {
    case "UPDATE_SLOT":
      let { rowIndex, slotIndex, color } = payload;
      state.field[rowIndex].values[slotIndex] = color;
      return { ...state };
    case "UPDATE_SCORE":
      const guess = [...state.field[payload.rowIndex].values];
      const code = [...state.code];
      const score = [];

      /**
       * loop through the guess,
       * find and remove exact matches
       */
      for (let i = 0; i < codeLength; i++) {
        if (guess[i] === code[i]) {
          score.push(2);
          code[i] = null; // all used up
          guess[i] = null; // all used up
        }
      }

      /**
       * loop through code,
       * to see if guess match the color
       * in any position
       */
      for (let i = 0; i < codeLength; i++) {
        for (let j = 0; j < codeLength; j++) {
          if (guess[j] !== null && guess[j] === code[i]) {
            score.push(1);
            code[i] = null; // all used up
            guess[j] = null; // all used up
          }
        }
      }

      /**
       * Generate an array of codeLength
       * with null values for misses
       */
      const finalScores = Array(codeLength).fill(null);
      for (let c = 0; c < score.length; c++) {
        finalScores[c] = score[c];
      }

      const total = finalScores.reduce((total, n) => total + n);
      const solved = total === solvedTotal;
       
      editRow(payload.rowIndex, {
        scores: finalScores,
        scored: true,
        total: total,
        solved: solved,
      });

      console.log('solved || state.field.length === maxTries', solved, state.field.length, maxTries, state.field.length === maxTries)

      // [TODO] only count the scored fields as tries
      const scoredRows = state.field.filter((row) => row.scored === true);

      // check end game
      if(solved || scoredRows.length >= maxTries) {
        console.log('Ending game');
        state.status = 'GAME_OVER';
      }
      else {
        // add another row and continue gameplay
        const newRow = generateRowData();
        state.field[payload.rowIndex + 1] = newRow;
      }

      console.log(state.status);

      return { ...state };
    case "RESET":
      // [TODO] the work here
      state = getInitialState();
      return { ...state };
    case "GAME_START":
      // [TODO] check game state
      state.status = "GAME_PLAYING";
      return { ...state };
    case "GAME_OVER":
      // [TODO] check winner
      return { ...state };
    default:
      throw new Error("unexpected action type");
  }
}

const initialRowData = () => {
  return {
    values: [null, null, null, null],
    active: true,
    scored: false,
    total: 0,
    solved: false,
    scores: [null, null, null, null],
  };
};

const generateRowData = (values) => {
  const data = initialRowData();
  if (typeof values !== "undefined" && values.length) {
    data.values = values;
  }
  return data;
};

const getInitialFieldData = () => {
  const fieldData = [];
  const row = generateRowData([null, null, null, null]);
  fieldData.push(row);
  return fieldData;
};

const generateCode = () => {
  return getRandomColors({ count: codeLength });
};

function getInitialState() {
  return {
    status: "GAME_PLAYING",
    field: getInitialFieldData(),
    code: generateCode(),
  };
}

/**
 * useBoard
 *
 * Creates a reducer
 *
 * @return {state, dispatch} action  */

function useBoard() {
  const initialState = getInitialState();
  // console.log('useBoard initialState', initialState);
  const [state, dispatch] = useReducer(boardReducer, initialState);
  return { state, dispatch };
}

function useBoardContext() {
  return useContext(BoardContext);
}

export default useBoard;
export { useBoardContext };
