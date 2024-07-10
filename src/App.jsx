import { Fragment, useState } from "react"
import Player from "./component/Player"
import GameBoard from "./component/GameBoard"
import Log from "./component/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectedSqure(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
    setGameTurns(prevTurns => {
      let currPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0] === 'X') {
        currPlayer = 'O';
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer }, ...prevTurns];

      return updatedTurns;
    })
  }
  return (
    <Fragment>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectedSqure} turns={gameTurns} />
      </div>
      <Log />
    </Fragment>
  )
}

export default App
