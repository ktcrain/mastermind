import React from 'react';
import './replay.scss';

function Replay({ solved, onClick }) {
  const playAgainHeading = solved ? "Fabulous!" : "Almost!";
  const playAgainBody = solved
    ? "You totally rocked it!"
    : "You got this next time!";

  return (
    <div className="Replay">
      <div className="Replay-Inner">
        <h2>{playAgainHeading}</h2>
        <p>{playAgainBody}</p>
        <button onClick={onClick}>Play Again</button>
      </div>
    </div>
  );
}
export default Replay;
