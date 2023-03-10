import React from 'react';

import './score.scss';

function getPegColor(score) {
  switch(score) {
    case 1:
      return 'white'; // matches color, but not position
    case 2:
      return 'black'; // matches color and position
    case null:
    default:
      return 'empty'
  }
}

let pegIndex = -1;
function Peg(props) {
  pegIndex++;
  const { score } = props;
  const displayColor = getPegColor(score);
  return (
    <div
      className="Score-Peg"
      key={`Score-Peg_${pegIndex}`}
    >
      <div className={`Score-Peg-Inner`}>
        <div className={`Score-Peg-Inner-Display Score-Peg-Inner-Display--${displayColor}`}>
          <span></span>
        </div>
      </div>
    </div>
  );
}

function Score({scores}) {
  return (
    <div className="Score">
      {scores.map((score, scoreIndex) => (<Peg score={score} key={scoreIndex} />))}
    </div>
  )
}

export default Score;