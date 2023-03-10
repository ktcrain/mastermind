import './app.scss';
import Board from '../board/board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span className="App-header-eyebrow">Codebreakin'</span>
          MASTERMIND
        </h1>
        <h2>Easy to learn. Easy to play.<br />But not so easy to win.</h2>
      </header>
      <main className="App-main">
        <Board />
      </main>
      <footer className="App-footer">
        <section>
          <h2>A Terrific Game of Deduction</h2>
          <ul>
            <li>Break the hidden code in this game of cunning and logic.</li>
            <li>In 10 moves or less, you must crack the secret code.</li>
            <li>Combines skill, luck, and fun!</li>
            <li>Easy to learn. Easy to play. But not so easy to win.</li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default App;
